import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Kebudayaan = ({navigation}) => {
  const peranan = [
    'Konsep persembahan: Tarian Majmuk (India +Melayu + Cuba + Bollywood).',
    'Maksima 4 minit.',
    'Tema Malam Kebudayaan: Malam Tutti Rainforest Bollywood Dance Fest.',
    'Memastikan skuad anda bersedia menghadiri screen test selepas Taklimat 2 (25 Mei 2024).',
    '5 persembahan pasukan yang paling baik semasa screen test akan diberikan markah bonus.',
    'Sila muat naikkan lagu persembahan pasukan dan sekolah anda ke dalam Google Drive yang diberikan semasa Taklimat 1, selewat-lewatnya pada jam 10 malam, 24 Mei 2024 (Jumaat).',
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
            Kebudayaan
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

export default Kebudayaan;
