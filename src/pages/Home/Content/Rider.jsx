import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const RiderTutti = ({navigation}) => {
  const lyrics = [
    'Riders!!! Saya! Saya! Saya!',
    'Up! Huh Hah! (x 2)',
    'Haus?! Yaaa! (x 2)',
    'Buka gigi! Hee! (x 3)',
    'Buka Mulut! Ha!',
    'Ketawaa… Hahaha..! (x 2)',
    'Apa namanya?! Tutti! Tutti! (x 2)',
    'Ada Tutti di hatimu?!',
    'Ada! Ada! Ada! (x 2)',
    'Anda mampu?! Yaaa! (x 3)',
    'Are you ready?! Yes Sir! (x 3)',
    'Awana, Adua, Amula…',
    '',
    'Na na na naaa… (x 4)',
    'Kami Pejuang Tutti..',
    'Gagah-gagah orangnya',
    'Tak suka hura-hura…',
    'Baik budi bicara',
    '1! 2! 3! 4!',
    'Ooooo… Rider Tutti! Huh Hah! (x 2)',
    '',
    'Masalu… Yaa..!',
    'Matula… Yaa..!',
    'Makilu! I See You!',
    'TFI!!!',
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
            Rider Tutti
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          {lyrics.map((text, index) => (
            <Text key={index} fontSize="2xl" style={styles.contentText}>
              {text}
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
  contentText: {color: '#fefefe'},
});

export default RiderTutti;
