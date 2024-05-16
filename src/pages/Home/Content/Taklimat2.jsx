import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Taklimat2 = ({navigation}) => {
  const peralatan_untuk_bawa = [
    'Tepukan & Sorakan',
    'Tag Nama (Semua Ahli)',
    'Bendera & Tiang Bendera',
    'Lagu dan Ikrar BSM',
    'Lagu Tema Kem; Riders Tutti',
    'Pouch Setiausaha & Phone Pouch Setiausaha',
    'Tutti Bank Book; Misi Green Bean Challenge',
    'Jadual Tugas Malam, Senarai Pesakit',
    'Bola Sepak, Bendera & Friendship Bracelets',
    'Lagu & Persembahan untuk Screen test',
    'Bendera Sekolah & Lagu Sekolah',
    'Laksanakan Misi-misi anda',
    'Tiga 4-men tent / Dua 6-men tent untuk diperiksa  ',
  ];

  const first_aid_kid = [
    'Calamine Cream',
    'ORS',
    'Hydrogen Peroxide',
    'Micropore Tape',
    'Sterile Glove',
    'Eye Ointment',
    'Cotton Swab',
    'Roller Bandage',
    'Cold Spray',
    'Prep Gauze',
    'Face Mask',
    'Plastic Forceps',
    'Scissors',
    'Vaseline',
    'Plasters',
  ];

  const peringatan = [
    'Be PUNCTUAL!',
    'Masa Pendaftaran: 8.00am',
    'Pakaian Taklimat 2: Baju BSMM Baharu, Treksut & Kasut Sukan',
    'Berdisiplin! Saman akan bermula secara rasmi pada Taklimat 2 kem !',
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
            Pastikan anda bersedia dengan:
          </Text>
          {peralatan_untuk_bawa.map((text, index) => (
            <Text key={index} fontSize="xl" mb={10} style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}
          <Text fontSize="xl" style={styles.contentText}>
            **Markah akan ditolak sekiranya khemah tidak disediakan
          </Text>

          <Div style={{height: 30}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Peringatan
          </Text>
          {peringatan.map((text, index) => (
            <Text key={index} fontSize="xl" mb={10} style={styles.contentText}>
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

export default Taklimat2;
