import { Image, StyleSheet, useColorScheme, Button, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const theme = useColorScheme() ?? 'light';
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuartier = async () => {
      try {
        const savedQuartier = await AsyncStorage.getItem('selectedQuartier');
        if (savedQuartier) {
          setValue(savedQuartier);
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load quartier');
      }
    };

    fetchQuartier();
  }, []);

  const data = [
    { label: 'Ahuntsic-Cartierville', value: 'ahc' },
    { label: 'Beaconsfield', value: 'bea' },
    { label: 'Côte-des-Neiges', value: 'cdn' },
    { label: 'Dorval', value: 'dor' },
    { label: 'Hochelaga-Maisonneuve', value: 'mhm' },
    { label: 'Lachine', value: 'lach' },
    { label: 'LaSalle', value: 'lasa' },
    { label: 'Sud-Ouest', value: 'sudo' },
    { label: 'Montréal-Nord', value: 'mtlnd' },
    { label: 'Notre-Dame-de-Grace', value: 'ndg' },
    { label: 'Outremont', value: 'outr' },
    { label: 'Peter-McGill', value: 'ptmc' },
    { label: 'Pierrefond-Roxboro', value: 'prox' },
    { label: 'Le Plateau Mont-Royal', value: 'pmr' },
    { label: 'Rivière-des-Prairies', value: 'rdp' },
    { label: 'Rosemont', value: 'rose' },
    { label: 'Saint-Léonard', value: 'sleo' },
    { label: 'Sainte-Marie-Saint-Jacques', value: 'stmar' },
    { label: 'Verdun', value: 'verd' },
    { label: 'Ville Mont-Royal', value: 'vmr' },
    { label: 'Villeray-Saint-Michel', value: 'smich' },
  ];

  const dropdownStyles = StyleSheet.create({
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  const handleSave = async () => {
    try {
      if (value !== null) {
        await AsyncStorage.setItem('selectedQuartier', value);
        Alert.alert('Saved', 'Restart the app to see changes');
      } else {
        Alert.alert('Error', 'Please select a quartier');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to save quartier');
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="settings" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Réglages:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Éco-Quartier:</ThemedText>
      </ThemedView>
      <Dropdown
        style={dropdownStyles.dropdown}
        placeholderStyle={dropdownStyles.placeholderStyle}
        selectedTextStyle={dropdownStyles.selectedTextStyle}
        inputSearchStyle={dropdownStyles.inputSearchStyle}
        iconStyle={dropdownStyles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Quartier"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={dropdownStyles.iconStyle} color={theme === 'light' ? 'black' : 'white'} name="home" size={20} />
        )}
      />
      <Button title="Save" onPress={handleSave} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});
