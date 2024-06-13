import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Image, TextInput, Alert } from 'react-native';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownData {
  [key: string]: DropdownOption[];
}

const requiredFields = ['Compilé par', 'Éco-quartier, ville liée ou arrondissement', 'Mandat abordé']; // Example required fields

const Patrouille = () => {
  const [formData, setFormData] = useState<Record<string, string | Date>>({});
  const [dropdownData, setDropdownData] = useState<DropdownData>({});
  const [dropdownValues, setDropdownValues] = useState<Record<string, string | null>>({});
  const [dateValues, setDateValues] = useState<Record<string, Date>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/gmr'); // Change the URL as needed
        const data = response.data;

        const formattedData: DropdownData = {};
        const initialDropdownValues: Record<string, string | null> = {};
        const initialDateValues: Record<string, Date> = {};
        const initialFormData: Record<string, string | Date> = {};
        
        Object.keys(data).forEach((key) => {
          formattedData[key] = data[key].map((item: string) => ({
            label: item.trim(),
            value: item.trim()
          }));

          if (key.toLowerCase().includes('date')) {
            initialDateValues[key] = new Date();
            initialFormData[key] = new Date();
          } else if (key.toLowerCase() === 'address') {
            initialFormData[key] = 'formula'; // Use a placeholder for address formula
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
  }, []);

  const handleInputChange = (key: string, selectedValue: string | Date) => {
    if (key.toLowerCase() !== 'address') { // Prevent changes to address
      setFormData({ ...formData, [key]: selectedValue });

      if (typeof selectedValue === 'string') {
        setDropdownValues((prevValues) => ({ ...prevValues, [key]: selectedValue }));
      } else {
        setDateValues((prevDates) => ({ ...prevDates, [key]: selectedValue }));
      }
    }
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
      delete submissionData['Adresse complète']; // Ensure address is not submitted

      console.log('Form data on submit:', submissionData); // Log form data for debugging
      await axios.post('http://localhost:5050/gmr', submissionData); // Change the URL as needed
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (loading) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <Image
            source={require('@/assets/images/patrouille-logo.png')}
            style={styles.patrouilleLogo}
          />
        }
      >
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#18ba88" />
          <ThemedText type="subtitle" style={styles.loading}>Loading...</ThemedText>
        </View>
      </ParallaxScrollView>
    );
  }

  const renderComponent = (key: string) => {
    if (key.toLowerCase().includes('date')) {
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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/patrouille-logo.png')}
          style={styles.patrouilleLogo}
        />
      }
    >
      <View style={styles.container}>
        {Object.keys(dropdownData).map((key) => (
          <View key={key} style={styles.dropdownContainer}>
            <Text style={requiredFields.includes(key) ? styles.requiredLabel : styles.label}>{key}</Text>
            {renderComponent(key)}
          </View>
        ))}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ParallaxScrollView>
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
  patrouilleLogo: {
    height: 200,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Patrouille;