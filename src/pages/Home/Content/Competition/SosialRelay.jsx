import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const SosialRelay = ({navigation}) => {
  const tepukan = [
    'Tepuk Bulan Sabit',
    'Chapter Klang',
    'Red Crescent',
    'Tepuk Semangat',
    'Tepuk Nyamuk',
    'Korewa Omigoto',
    'Tepuk Doraemon',
    'Tepuk Wow Hebat',
    'Tepuk Terima Kasih',
    'Tepuk Fuyoh',
  ];

  const sorakan = [
    'Tutti Let’s Go',
    'Siapa Bising di Sana',
    'Boo Sama Dia',
    'Tarik Nafas',
    'Perhatian…. Yo!',
    'Tutti Dynamite',
  ];

  const tarian = [
    'Kangaroo Dance',
    'Elephant Dance',
    'Billy Manja',
    'Walk All Night',
    'Chicken Dance',
  ];

  const song = [
    'The more we get together',
    'Coconut',
    'Hello Song',
    'Di Sini Kita Berkumpul',
    'Zulu Song',
    'Oyako Damburi',
    'Everywhere we go',
    'Sampale Sampalowa',
    'Aika Simba',
    'Apo Eh Tai Tai',
  ];

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollViewContainer}>
        <Div alignItems="center">
          <Image
            h={100}
            w={100}
            m={10}
            rounded="circle"
            source={require('../../../../assets/ktf_logo.webp')}
          />

          <Text fontSize="2xl" style={styles.title}>
            Sosial Relay
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="xl" style={styles.contentHeader}>
            Tepukan Sosial
          </Text>
          {tepukan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 30}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Sorakan Sosial
          </Text>
          {tepukan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 30}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Tarian Sosial
          </Text>
          {tepukan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 30}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Nyanyian Sosial
          </Text>
          {tepukan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}
        </Div>

        <Div style={{height: 80}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#211134',
    minHeight: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: '900',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  contentContainer: {
    borderRadius: 20,
    backgroundColor: 'rgba(111, 90, 136, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  contentHeader: {
    color: '#fefefe',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentText: {color: '#fefefe'},
});

export default SosialRelay;
