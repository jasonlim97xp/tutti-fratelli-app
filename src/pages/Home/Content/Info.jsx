import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const TuttiInfo = [
  {
    id: 1,
    info: 'Date: ',
    detail: '1,2,3,4 June 2024 (Saturday - Tuesday)',
  },
  {
    id: 2,
    info: 'Taklimat 1: ',
    detail: '18 May 2024 (Saturday)',
  },
  {
    id: 3,
    info: 'Taklimat 2: ',
    detail: '25 May 2024 (Saturday)',
  },
  {
    id: 4,
    info: 'Venue: ',
    detail: 'Hutan Lipur Sungai Tua (HUTLISTA 2), Gombak, Selangor',
  },
  {
    id: 5,
    info: 'Yuran: ',
    detail: 'RM 100',
  },
  {
    id: 6,
    info: 'Tema: ',
    detail: 'Tutti Fratelli: 25 Years of Humanity, Unity & Togetherness',
  },
  {
    id: 7,
    info: 'Konsep: ',
    detail: 'Sekolah vs Sekolah',
  },
  {
    id: 8,
    info: 'Lagu Tema: ',
    detail: 'Hulurkan Tanganmu',
  },
  {
    id: 9,
    info: 'Laungan Tutti: ',
    detail: "Rider's Tutti",
  },
  {
    id: 10,
    info: 'Nama Kumpulan: ',
    detail: 'Phonetic + Nama Sekolah + Maskot Perkampungan',
  },
  {
    id: 11,
    info: 'Daerah : ',
    detail: 'Klang, Gombak, Hulu Langat, Petaling Jaya',
  },
];

const Info = ({navigation}) => {
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
            TUTTI 25 INFORMATION
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          {TuttiInfo.map(info => (
            <Text style={styles.contentText} key={info.id}>
              {info.info}
              {'\n'}
              {info.detail}
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
  contentText: {color: '#fefefe', marginBottom: 20},
});

export default Info;
