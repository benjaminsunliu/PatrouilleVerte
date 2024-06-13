import { Image, StyleSheet, Platform, View, Text, useColorScheme, Button, Alert, ActivityIndicator, TextInput} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DynamicForm from '@/components/DynamicForm';

const Patrouille = () => {
  const [showGMR, setShowGMR] = useState(false);
  const [showEAU, setShowEAU] = useState(false);
  const [showFORET, setShowFORET] = useState(false);

  const refreshGMR = async () => {
    setShowGMR(false);
    alert('Refreshing, please wait...');
    await axios.get('http://localhost:5050/fetchgmrndg');
    alert('GMR updated');
    setShowGMR(false);
    setShowGMR(true);
  }

  return (
    <ParallaxScrollView
      // Header
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/patrouille-logo.png')}
          style={styles.patrouilleLogo}
        />
      }>
      {/* Title*/}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Choisissez le Mandat:</ThemedText>
      </ThemedView>
      
      {/*GMR Form*/} 
      <ThemedView style={styles.stepContainer}>
        <Collapsible title="GMR" collapsed={!showGMR} onToggle={() => setShowGMR(!showGMR)}>
          <DynamicForm apiEndpoint='http://localhost:5050/gmrndg'/>
          <Button title='Refresh' onPress={refreshGMR}/>
        </Collapsible>
      </ThemedView>

      {/*EAU Form*/}
      <ThemedView style={styles.stepContainer}>
          <Collapsible title="EAU" collapsed={!showEAU} onToggle={() => setShowEAU(!showEAU)}>
            <DynamicForm apiEndpoint='http://localhost:5050/eaundg'/>
          </Collapsible>
      </ThemedView>


      {/*FORET Form*/}
      <ThemedView style={styles.stepContainer}>
          <Collapsible title="FORET" collapsed={!showFORET} onToggle={() => setShowFORET(!showFORET)}>
              
            <Button title='Submit'/>
          </Collapsible>
      </ThemedView>
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
  patrouilleLogo: {
    height: 200,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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

export default Patrouille;
