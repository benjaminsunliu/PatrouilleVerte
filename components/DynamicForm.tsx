import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput, Alert, StyleSheet, Platform} from 'react-native';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import AntDesign from '@expo/vector-icons/AntDesign';

interface FormProps {
  apiEndpoint: string;
}

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownData {
  [key: string]: DropdownOption[];
}

const requiredFields = ['Compilé par', 'Éco-quartier, ville liée ou arrondissement', 'Mandat abordé']; // Example required fields

const DynamicForm: React.FC<FormProps> = ({ apiEndpoint }) => {
  const [formData, setFormData] = useState<Record<string, string | Date>>({});
  const [dropdownData, setDropdownData] = useState<DropdownData>({});
  const [dropdownValues, setDropdownValues] = useState<Record<string, string | null>>({});
  const [dateValues, setDateValues] = useState<Record<string, Date>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        const data = response.data;

        const formattedData: DropdownData = {};
        const initialDropdownValues: Record<string, string | null> = {};
        const initialDateValues: Record<string, Date> = {};
        const initialFormData: Record<string, string | Date> = {};

        Object.keys(data).forEach((key) => {
          formattedData[key] = data[key].map((item: string) => ({
            label: item.trim(),
            value: item.trim(),
          }));

          if (key.toLowerCase().includes('date')) {
            initialDateValues[key] = new Date();
            initialFormData[key] = new Date();
          } else {
            initialDropdownValues[key] = null; // No initial selection
            initialFormData[key] = '';
          }
        });

        setDropdownData(formattedData);
        setDropdownValues(initialDropdownValues);
        setDateValues(initialDateValues);
        setFormData(initialFormData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const handleInputChange = (key: string, selectedValue: string | Date) => {
    if (key.toLowerCase() === 'adresse complète') {
      // Prevent changes to "Adresse complète" directly
      return;
    }

    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [key]: selectedValue };

      if (typeof selectedValue === 'string') {
        setDropdownValues((prevValues) => ({ ...prevValues, [key]: selectedValue }));
      } else {
        setDateValues((prevDates) => ({ ...prevDates, [key]: selectedValue }));
      }

      // Check if the key is related to address components and update the address
      const isCivique = key.toLowerCase().includes('numéro civique');
      const isType = key.toLowerCase().includes('type de route (rue, boulevard, drive, etc)');
      const isRoute = key.toLowerCase().includes('nom de la route');

      if (isCivique || isType || isRoute) {
        const civique = updatedFormData['Numéro civique'] || '';
        const type = updatedFormData['Type de route (rue, boulevard, drive, etc)'] || '';
        const route = updatedFormData['Nom de la route'] || '';

        // Update the address field with concatenated values
        updatedFormData['Adresse complète'] = `${civique} ${type} ${route}`.trim();
      }

      return updatedFormData;
    });
  };

  const validateForm = () => {
    for (const field of requiredFields) {
      if (!formData[field] || formData[field] === '') {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fill out all required fields.');
      return;
    }

    try {
      const submissionData = { ...formData };

      console.log('Form data on submit:', submissionData); // Log form data for debugging
      await axios.post(apiEndpoint, submissionData); // Change the URL as needed
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#18ba88" />
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  const renderComponent = (key: string) => {
    if (key.toLowerCase().includes('date') && Platform.OS === 'ios') {
      return (
        <RNDateTimePicker
          mode="date"
          display="default"
          value={dateValues[key] || new Date()}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || new Date();
            setDateValues((prevDates) => ({ ...prevDates, [key]: currentDate }));
            handleInputChange(key, currentDate);
          }}
        />
      );
    }
    if (key.toLowerCase().includes('date') && Platform.OS === 'android') {
        return (
            <View>
          <Button
            onPress={() => {
              DateTimePickerAndroid.open({
                value: dateValues[key] || new Date(),
                onChange: (event, selectedDate) => {
                  const currentDate = selectedDate || new Date();
                  setDateValues((prevDates) => ({ ...prevDates, [key]: currentDate }));
                  handleInputChange(key, currentDate);
                },
                mode: 'date',
                is24Hour: true,
              });
            }}
            title={`Selected Date: ${(dateValues[key] || new Date()).toDateString()}`}
          />
        </View>
        );
      }

    if (dropdownData[key] && dropdownData[key].length > 0) {
      return (
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropdownData[key]}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select an option"
          searchPlaceholder="Search..."
          value={dropdownValues[key]}
          onChange={(item) => handleInputChange(key, item.value)}
          renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          )}
        />
      );
    } else {
      return (
        <TextInput
          style={styles.textInput}
          placeholder={`Enter ${key}`}
          value={formData[key] ? String(formData[key]) : ''}
          onChangeText={(text) => handleInputChange(key, text)}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      {Object.keys(dropdownData).map((key) => (
        <View key={key} style={styles.dropdownContainer}>
          <Text style={requiredFields.includes(key) ? styles.requiredLabel : styles.label}>{key}</Text>
          {renderComponent(key)}
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  requiredLabel: {
    marginBottom: 8,
    fontSize: 16,
    color: 'red', // Indicate required fields in red
  },
  dropdown: {
    height: 50,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#888',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 5,
  },
  textInput: {
    height: 50,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default DynamicForm;
