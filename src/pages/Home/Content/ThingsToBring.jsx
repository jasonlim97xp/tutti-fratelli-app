import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const ThingsToBring = ({navigation}) => {
  const peralatan_untuk_bawa = [
    '3 buah 4 men tent / 2 buah 6 men tent (maksima 3 buah)',
    'Storage Box (Plastik)',
    '3 Pen Markah Berlainan Warna',
    'Tali Rafia (1 gulung besar)',
    'Sulfur untuk keselamatan kawasan khemah',
    'Plastik Sampah (kebersihan)',
    '1 Baldi (multi purpose)',
    'Watercolor & brush',
    'Surat Khabar Lama (pelapik)',
    'Peralatan QM',
    'Batu bata x 3 unit',
    'Parang',
    'Kitbox, Tali BSM & Kain Anduh (pertandingan hari terakhir)',
    'Lampu Suluh',
    'Baju PJ/ Baju Sukan/ Baju Jersi Seragam Kumpulan',
    'Baju Superhero/ Kostum Watak',
    'Baju Kebudayaan',
    'Baju Set A/ B',
  ];

  const peringatan = [
    'Semua peralatan pasukan harus diletakkan di dalam storage box dan dilabelkan dengan nama kumpulan.',
    'Hantarkan storage box kumpulan anda ke HQ pada 29 Mei 2024',
    'Semua peralatan lain harus dibawa pada Hari Pertama kem',
    'Semua peralatan skuad adalah di bawah tanggungjawab skuad',
    'Pastikan semua peralatan skuad dibawa balik sebaik sahaja tamat perkhemahan',
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
            source={require('../../../assets/ktf_logo.webp')}
          />

          <Text fontSize="2xl" style={styles.title}>
            Senarai Peralatan
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="xl" style={styles.contentHeader}>
            Peralatan Kumpulan
          </Text>
          {peralatan_untuk_bawa.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 30}} />

          <Text fontSize="xl" style={styles.contentHeader}>
            Peringatan
          </Text>
          {peringatan.map((text, index) => (
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

export default ThingsToBring;
