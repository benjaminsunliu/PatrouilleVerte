import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons size={310} name="map" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>Pour en savoir plus sur l'Éco-Quartier:</ThemedText>
      <Collapsible title="À propos du REQ">
        <ThemedText>
        Le Regroupement des éco-quartiers est composé des organismes à but non lucratif promoteurs du programme Éco-quartier mais aussi d'autres programmes environnementaux. Ce regroupement favorise le développement et le rayonnement du programme Éco-quartier de même que la mise en commun d’outils et de pratiques d’intervention dans le domaine de l’éducation relative à l’environnement.
        </ThemedText>
        <ExternalLink href="https://www.eco-quartiers.org/presentation">
          <ThemedText type="link">Lire Plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Patrouille Bleue">
        <ThemedText>
          Initiée par le Service de l’eau de la Ville de Montréal en 2010, la Patrouille bleue est coordonnée par le Regroupement des éco-quartiers (REQ) depuis sa création. La Patrouille bleue a pour mandats de sensibiliser les citoyen.ne.s et de favoriser leur implication en matière de gestion durable et responsable des eaux.
        </ThemedText>
        <Image source={require('@/assets/images/patrouillebleue.webp')} style={{ alignSelf: 'center'}} />
        <ExternalLink href="https://www.eco-quartiers.org/patrouille-bleue">
          <ThemedText type="link">Lire Plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Patrouille Verte">
        <ThemedText>
        La Patrouille verte, c'est quoi ? De juin à août, cette brigade de sensibilisation environnementale informe et sensibilise aux enjeux environnementaux de même qu'aux pratiques écoresponsables près de 40 000 citoyen.ne.s par année. La soixantaine d'agent.e.s de la Patrouille verte vise, par le biais d'une sensibilisation positive, à encourager et aider les citoyen.ne.s à devenir des acteur.trice.s de changement dans leur milieu de vie.  
        </ThemedText>
        <Image source={require('@/assets/images/patrouille-logo.png')} style={{ alignSelf: 'center'}} />
        <ExternalLink href="https://www.eco-quartiers.org/patrouilleverte">
          <ThemedText type="link">Lire Plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Dépliants de la Ville">
        <ThemedText>
          Pour en savoir plus sur les services de la Ville de Montréal, consultez les dépliants suivants:
        </ThemedText>
        <ExternalLink href="https://www.eco-quartiers.org/d%C3%A9pliants-de-la-ville">
          <ThemedText type="link">Lire Plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Communiqués">
        <ThemedText>
          Pour consulter les derniers communiqués du REQ, cliquez sur le lien suivant:
        </ThemedText>
        <ExternalLink href="https://www.eco-quartiers.org/communiques">
          <ThemedText type="link">Lire Plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Suivez Nous">
      <ExternalLink href="https://fr-ca.facebook.com/regroupementeq/">
          <ThemedText type="link"><Image source={require('@/assets/images/facebook.webp')} style={styles.logo} /></ThemedText>
      </ExternalLink>
      <ExternalLink href="https://www.instagram.com/regroupementeq/">
          <ThemedText type="link"><Image source={require('@/assets/images/insta.png')} style={styles.logo} /></ThemedText>
      </ExternalLink>
      <ExternalLink href="https://fr.linkedin.com/company/regroupement-des-%C3%A9co-quartiers">
          <ThemedText type="link"><Image source={require('@/assets/images/linkedin.webp')} style={styles.logo} /></ThemedText>
      </ExternalLink>
      <ExternalLink href="https://www.youtube.com/channel/UC_U_pKqHe1Qz_yqpZj5ae1w">
          <ThemedText type="link"><Image source={require('@/assets/images/Youtube.webp')} style={styles.logo} /></ThemedText>
      </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#067a9f',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
