import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Setiausaha = ({navigation}) => {
  const peranan = [
    'Menghubungi semua peserta untuk mesyuarat pasukan.',
    'Menyimpan satu senarai nama dan nombor telefon pasukan.',
    'Menyediakan Pouch Setiausaha.',
    'Menyimpan semua Kertas Arahan Modul semasa perkhemahan.',
    'Menyediakan Phone Pouch Setiausaha serta sebuah telefon bimbit Android yang telah memuat turun Tutti App.',
    'Melengkapkan laporan setiausaha.',
    'Menyimpan semua alatan tulis yang dibawa dalam sepanjang perkhemahan tersebut.',
  ];

  const laporan = [
    'Laporan Setiausaha bermula dari hari pertama kem sehingga berakhirnya kem.',
    'Laporan Setiausaha akan ditaip atas ‘Tutti App’.',
    'Kriteria Laporan Harian Kem:',
    '1.   Laporan module akan diaktifkan setelah modul tertentu telah dilaksanakan.',
    '2.   Mengandungi rumusan tentang keseluruhan aktiviti yang berlangsung pada hari tersebut.',
    '3.   Harus dilengkapkan dan dimuat naik semasa mesyuarat setiausaha di penghujung hari.',
    '4.   Rumusan umpan balik haruslah diberi oleh kesemua ahli.',
  ];

  const pouch = [
    'Pouch should be waterproof, to keep kertas arahan module',
    'Pouch harus dihiaskan dengan ‘Logo KTF-25’ serta ‘No. & Nama Skuad’ anda',
    'Phone Pouch haruslah muat telefon bimbit Android yang ditetapkan oleh skuad anda',
    'Phone Pouch haruslah dihiaskan dengan ‘Logo KTF-25’ serta ‘No. & Nama Skuad’ anda',
    'Tarikh penghantaran: 25 Mei 2024 (Taklimat 2)',
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
            Setiausaha
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="xl" style={styles.contentHeader}>
            Peranan Setiausaha
          </Text>
          {peranan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 20}} />

          <Text fontSize="xl" style={styles.contentHeader}>
            Laporan Setiausaha
          </Text>
          {laporan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 20}} />

          <Text fontSize="xl" style={styles.contentHeader}>
            Dua Jenis Pouch Setiausaha
          </Text>
          {pouch.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 20}} />
          <Div style={{alignItems: 'center'}}>
            <Image
              h={200}
              w={300}
              m={10}
              source={require('../../../../assets/content/fail_pouch.png')}
            />
            <Image
              h={200}
              w={150}
              m={10}
              source={require('../../../../assets/content/su_pouch.jpg')}
            />
          </Div>
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

export default Setiausaha;
