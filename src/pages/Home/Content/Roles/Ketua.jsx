import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Ketua = ({navigation}) => {
  const peranan = [
    'Mengetuai pasukan anda (motivational talk…)',
    'Menetapkan tarikh dan mesyuarat pasukan',
    'Memastikan setiap peserta berkenalan antara satu sama lain.',
    'Memastikan semua informasi penting disampaikan kepada semua peserta.',
    'Memastikan checklist pasukan sentiasa diikuti.',
    'Memaklumkan Coach sekiranya mengadakan mesyuarat pasukan.',
  ];

  const pastikan = [
    'Jangan bermarah-marahan dengan ahli kumpulan semasa perbincangan kumpulan.',
    'No one-man show!! Delegasikan tugas.',
    'Kongsi masalah kumpulan anda bersama Coach anda. Selesaikan bersama!',
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
            Ketua
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="xl" style={styles.contentHeader}>
            Peranan Ketua
          </Text>
          {peranan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 20}} />

          <Text fontSize="xl" style={styles.contentHeader}>
            Memastikan Anda…
          </Text>
          {pastikan.map((text, index) => (
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
  contentText: {color: '#fefefe', marginBottom: 10},
});

export default Ketua;
