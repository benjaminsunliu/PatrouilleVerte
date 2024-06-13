import { Image, StyleSheet, Platform, TextInput, useColorScheme, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function PatrouilleScreen() {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    const theme = useColorScheme() ?? 'light';
    const [value, setValue] = useState(null);
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
        { label: 'Ville Mont-Royal', value: 'vmr' },
        { label: 'Villeray-Saint-Michel', value: 'smich' },
      ];
      const dropdownStyles = StyleSheet.create({
        placeholderStyle: {
          color: theme === 'light' ? 'black' : 'white',
          fontSize: 16,
        },
        dropdown: {
          color: theme === 'light' ? 'black' : 'white',
          margin: 16,
          height: 50,
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
        },
        icon: {
          marginRight: 5,
        },
        selectedTextStyle: {
          color: theme === 'light' ? 'black' : 'white',
          fontSize: 16,
        },
        iconStyle: {
          width: 20,
          height: 20,
        },
        inputSearchStyle: {
          color: theme === 'light' ? 'black' : 'black',
          height: 40,
          fontSize: 16,
        },
        dateContainer: {
          color: theme === 'light' ? 'white' : 'black',
          flex: 1,
          backgroundColor: theme === 'light' ? '#fff' : '#151718',
        },
      });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons size={310} name="settings" style={styles.headerImage} />
      }>
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
          
        }}
        renderLeftIcon={() => (
          <AntDesign style={dropdownStyles.icon} color={theme === 'light' ? 'black' : 'white'} name="home" size={20} />
        )}
      />
      <Button title="Save"/>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
