import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#76b829', dark: '#46783c' }}
      headerImage={
        <Image
          source={require('@/assets/images/eco-logo.png')}
          style={styles.ecoLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenue!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">À propos</ThemedText>
        <Image
          source={require('@/assets/images/main.jpeg')}
          style={styles.mainImg}>
        </Image>
        <ThemedText>
        Le Regroupement des éco-quartiers (REQ) est un organisme à but non lucratif et non partisan fondé en 1999 par des éco-quartiers désireux de mettre leurs ressources en commun. Le REQ assure, depuis 2002, la représentation de ses membres au niveau régional.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Contact</ThemedText>
        <ThemedText>
          <Ionicons name="location" size={15} color="orange" /> 
          {" "}75 Square Sir-Georges-Étienne-Cartier (local 219), Montréal, QC, H4C 3A1{"\n"}
          <Ionicons name="mail" size={15} color="orange" />
          {" "}info@eco-quartiers.org{"\n"}
          <Ionicons name="call" size={15} color="orange" />
          {" "}514 507-5401
        </ThemedText>
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
  ecoLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  mainImg: {
    height: 200,
    width: 330,
    borderRadius: 10,
    borderWidth: 2,
    bottom: 0,
    left: 0,
    position: 'relative',
  },
});
