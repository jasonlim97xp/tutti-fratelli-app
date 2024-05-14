import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const FirstAidSkill = ({navigation}) => {
  const skills = [
    'Anduh Tangan Besar',
    'Anduh Tangan Kecil',
    'Anduh Tiga Segi',
    'Balutan Dagu',
    'Balutan Tapak Kaki',
    'Balutan Pendarahan',
    'Balutan Telinga',
    'Balutan Immobilisasi',
    'Balutan Femur, Tibia & Fibula',
    'Improvised C-Collar',
    'R.I.C.E',
    'Balutan Tapak Tangan',
    'Balutan Mata',
    'Luka di Dahi',
    'Balutan Kepala',
    'CPR',
    'Buku Sila',
    'Pitam',
    'Usungan',
    'Fireman Carry',
    'Two-Men Carry',
    'Luka Tusukan Abdomen',
    'Simpul Manuk',
    'Kerusi Bomba',
    'Tangga Bomba',
    'Simpul Lapan',
    'Simpul Lapan Bertindih',
    'Simpul Pengail',
    'Simpul Overhead',
    'Pasang C-Collar',
    'Capillary Refill Test',
    'Hidung Berdarah',
    'Ikatan 8 Pada Kaki',
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
            First Aid Skill
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          {skills.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1} {text}
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

export default FirstAidSkill;
