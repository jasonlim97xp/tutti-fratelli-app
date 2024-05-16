import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const IT = ({navigation}) => {
  const peranan = [
    'Memastikan ahli skuad anda follow "ilovetuttifratelli" @ IG serta "I <3 Tutti Fratelli" @ FB Group.',
    'Mendapatkan akses akaun sosial media unit BSMM sekolah anda.',
    'Membangunkan strategi media sosial dengan akaun sosial media unit BSMM sekolah anda.',
    'Bertanggungjawab bagi segala arahan mengenai tugasan sosial media.',
    'Mengambil dan berkongsi gambar, video, atau kandungan visual yang memaparkan aktiviti perkhemahan Kem Tutti Fratelli!',
    'Segala arahan tugasan sosial media harus dimuat naik dengan akaun sosial media unit BSMM sekolah anda.',
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
            IT & Sosial Media
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          {peranan.map((text, index) => (
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
  contentText: {color: '#fefefe', marginBottom: 10},
});

export default IT;
