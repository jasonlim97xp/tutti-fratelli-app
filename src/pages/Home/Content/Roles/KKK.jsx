import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const KKK = ({navigation}) => {
  const lyrics = [
    'Ahli KKK anda perlu menjaga keselamatan ahli skuad anda sepanjang kem.',
    'Sekiranya ada sebarang isu-isu kesihatan ahli anda, sila melaporkan isu itu kepada Tutti Medical Centre dengan segera.',
    'Menyediakan jadual tugas `Tutti Night Guard`.',
  ];

  const tugasMalam = [
    'Template jadual tugas malam akan diedarkan melalui group Whatsapp KKK.',
    'Setiap shif harus ada 2 ahli bertugas daripada setiap skuad.',
    'Setiausaha skuad dikecualikan daripada bertugas malam.',
    'Memastikan ahli skuad anda bertugas mengikuti jadual yang ditetapkan.',
    'Pastikan ahli skuad yang bertugas membawa wisel, lampu suluh serta sentaisa memakai tag nama bersama mereka.',
    'Setiap ahli yang bertugas harus melaporkan diri di Tutti Medical Centre 15 minit sebelum shift bermula.',
    'Cetak, Laminate dan Hantarkan jadual tugas malam kepada AJK KKK pada Taklimat 2 Kem (28 Mei 2024).',
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
            KKK
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="2xl" style={styles.title}>
            Peranan KKK
          </Text>
          {lyrics.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 20}} />

          <Text fontSize="2xl" style={styles.title}>
            Tutti Night Guard
          </Text>
          {tugasMalam.map((text, index) => (
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

export default KKK;
