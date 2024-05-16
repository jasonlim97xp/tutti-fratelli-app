import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Kuartermaster = ({navigation}) => {
  const peranan = [
    '1. Memastikan semua peralatan QM dan Kumpulan yang harus dibawa lengkap dan dalam keadaan yang baik.',
    '2. Semua peralatan harus dikumpulkan dan dimasukkan dalam kotak dengan keadaan yang baik di HQ pada 29 Mei 2024.',
    '3. Mengambil makanan yang secukupnya bagi ahli skuad anda daripada tapak QM setiap kali bunyi wisel untuk anda (panjang pendek) telah ditiupkan.',
    '4. Bersedia untuk bertanding dalam modul memasak kem!',
  ];

  const peralatan_kuartermaster = [
    {
      item: 'Storage Box',
      amount: '1 unit',
    },
    {
      item: 'Kuali',
      amount: '2 unit',
    },
    {
      item: 'Periuk',
      amount: '1 unit',
    },
    {
      item: 'Minyak Masak',
      amount: 'Anggaran botol 500ml',
    },
    {
      item: 'Minyak Tanah',
      amount: 'Anggaran botol 1.5 liter',
    },
    {
      item: 'Senduk',
      amount: '2 unit',
    },
    {
      item: 'Lilin Askar (Fire starter)',
      amount: '1 kotak',
    },
    {
      item: 'Pembuka Tin',
      amount: '1 unit',
    },
    {
      item: 'Kayu Api \n(Jangan gunakan kayu bakau)',
      amount: 'Secukupnya',
    },
    {
      item: 'Papan Pemotong',
      amount: '2 unit',
    },
    {
      item: 'Sabun & Span Pencuci',
      amount: 'Secukupnya',
    },
    {
      item: 'Pemetik Api/ Mancis',
      amount: '3 unit',
    },
    {
      item: 'Pisau',
      amount: '2 unit',
    },
    {
      item: 'Cawan, pinggan, sudu, garpu',
      amount: 'Secukupnya',
    },
    {
      item: '⁠Jug Air',
      amount: '2 unit',
    },
    {
      item: 'Sudip',
      amount: '2 unit',
    },
    {
      item: `Bekas Makanan \n(untuk mengambil makanan)`,
      amount: '2 unit',
    },
    {
      item: 'Kain Buruk',
      amount: 'Secukupnya',
    },
    {
      item: 'Plastik Sampah (Warna Biru)',
      amount: 'Secukupnya',
    },
    {
      item: 'Surat Khabar',
      amount: 'Secukupnya',
    },
    {
      item: 'Tikar Plastik/ Mengkuang',
      amount: '2 unit',
    },
    {
      item: 'Dulang',
      amount: '2 unit',
    },
  ];

  const peringatan = [
    '1. Jangan campurkan minyak tanah bersama peralatan QM.',
    '2. Pastikan peralatan memasak adalah HALAL!',
    '3. Skuad dibenarkan membawa Peralatan QM tambahan demi keselesaan dan kemudahan aktiviti memasak (Atas budi bicara sendiri).',
    '4. Bahan makanan tambahan adalah DILARANG sama sekali.',
    '5. Junk food tidak dibenarkan',
    '6. Sebelum & selepas makan, sila pastikan tapak QM, tapak khemah dan sinki sentiasa bersih dan bebas dari sisa makanan.',
    '7. Denda MENARIK menanti sekiranya peraturan tidak dipatuhi!!!',
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
            Kuartermaster
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="xl" style={styles.contentHeader}>
            Peranan Kuartermaster
          </Text>
          {peranan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 30}} />

          <Text fontSize="xl" style={styles.contentHeader}>
            Senarai Peralatan Kuartermaster
          </Text>
          {peralatan_kuartermaster.map((item, index) => (
            <Div
              key={index}
              flexDir="row"
              justifyContent="space-around"
              style={{marginBottom: 8}}>
              <Text fontSize="lg" style={styles.contentText}>
                {item.item}
              </Text>
              <Text style={{flex: 1, textAlign: 'right', color: '#fefefe'}}>
                {item.amount}
              </Text>
            </Div>
          ))}

          <Div style={{height: 30}} />

          <Text fontSize="xl" style={styles.contentHeader}>
            Peringatan
          </Text>
          {peringatan.map((text, index) => (
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

export default Kuartermaster;
