import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Awards = ({navigation}) => {
  const kategori_kumpulan = [
    '1. Johan',
    '2. Naib Johan',
    '3. Tempat Ketiga',
    '4. Bandaging Relay Champion',
    '5. Social Relay Champion',
    '6. Classical First Aid Champion',
    '7. Pertandingan Kawad Kaki Champion',
    '8. Persembahan Terbaik',
    '9. Tepukan/ Sorakan Terbaik',
    '10. Tutti War Cry Terbaik',
  ];

  const kategori_individu = [
    '1. Belia Lelaki Terbaik',
    '2. Belia Perempuan Terbaik',
    '3. Penghulu Kampung Terbaik',
    '4. Ketua Terbaik',
    '5. Penolong Ketua Terbaik',
    '6. Setiausaha Terbaik',
    '7. Kebudayaan Terbaik',
    '8. IT & Sosial Media Terbaik',
    '9. QM Terbaik',
    '10. KKK Terbaik',
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
            Awards
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text style={styles.contentHeader}>Kategori Skuad</Text>
          {kategori_kumpulan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 30}} />

          <Text style={styles.contentHeader}>Kategori Individu</Text>
          {kategori_individu.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
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
  contentHeader: {
    color: '#fefefe',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentText: {color: '#fefefe'},
});

export default Awards;
