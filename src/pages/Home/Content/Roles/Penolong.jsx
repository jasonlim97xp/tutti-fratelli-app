import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const {width: screenWidth} = Dimensions.get('window');

const Penolong = ({navigation}) => {
  const peranan = [
    'Mengendalikan perbelanjaan pasukan (bendera, identity, nametag…)',
    'Memahami sistem pemarkahan kem',
    'Pastikan ahli skuad anda melakukan semua MISI sebelum dan semasa kem',
    'Pastikan disiplin pasukan diketatkan untuk mengelakkan SAMAN sebelum atau sepanjang kem',
    'Menyimpan Tutti Bank Book skuad dengan baik semasa kem',
    'Menghantar Tutti Bank Book skuad kepada Coach Pemarkahan pada jam 12 tengah malam setiap malam semasa kem',
    'Mengisi dan menghantar borang tender (sekiranya diperlukan)',
    'Sentiasa proaktif dan membantu Captain merancang sebarang strategi untuk meningkatkan markah (menyertai Tutti Power Hour)',
  ];

  const type1 = [
    'Setiap pasukan akan mendapatkan Ringgit Tutti selepas melengkapkan setiap modul',
    'Markah pemenang modul adalah seperti berikut:',
    '-    Tempat pertama : 150',
    '-    Tempat Kedua : 130',
    '-    Tempat Ketiga : 120',
    '-    Tempat Keempaat - Kesepuluh : 100',
    '-    Tamat Modul : 80',
    '-    Gagal tamat Modul : 50',
  ];

  const type2 = [
    'Misi adalah suatu tugasan yang akan diberikan sebelum dan semasa kem untuk membantu memperoleh markah selain daripada modul.',
    '-    Contoh misi: Social Media Challenge (sebelum kem)',
    '-    Follow @ilovetuttifratelli Instagram page dan I Love Tutti Facebook page untuk mengikuti dan menjalankan sebarang misi yang diberikan',
  ];

  const type3 = [
    'BONUS boleh dimenangi daripada semua AJK pada bila-bila masa dari hari pertama kem hingga hari terakhir.',
    'Bagi setiap BONUS yang dimenangi, satu sticker akan diberikan daripada Coach',
    'Tampalkan sticker dengan baik di dalam ‘TUTTI Bank Book',
    'Cara memperolehi bonus : berkelakuan baik, membantu AJK, melaksanakan skil BSMM, proaktif, menampilkan semangat setiakawan & kerjasama',
  ];

  const type4 = [
    'Striker skuad yang ingin melakukan tender harus meminta kebenaran daripada Coach Pemarkahan',
    'Tender yang boleh dilakukan ialah tugas daripada Coach Pemarkahan atau tugas kreatif yang ingin dilakukan oleh skuad masing-masing',
    'Jika permohonan diluluskan, laporkan diri kepada Coach tugas tender anda dan menjalankan tender tersebut.',
    'Setelah siap menjalankan tugas, dapatkan tandatangan daripada Coach tugas tender tersebut.',
  ];

  const type5 = [
    'Sepanjang Kem, Striker kena sentiasa peka pada masa TUTTI POWER HOUR.',
    'Loceng berbunyi menandakan Tutti Power Hour dimulakan. ',
    'Semasa loceng dibunyikan, Striker akan dikumpul untuk diberikan arahan.',
    'Terdapat 2 jenis Power Hour:',
    '1.    Berasaskan Kemahiran',
    '     - Skuad harus menunjukkan satu kemahiran yang diberikan oleh mana-mana Coach untuk mendapatkan TUTTI Bonus',
    '2.    Free and Easy',
    '     - Skuad boleh buat apa sahaja yang Coach minta, seperti mengambil secawan air, atau memberikan urut atas bahu',
    '     - Selepas tamatkan tugas, dapatkan tandatangan dari AJK dan laporkan kepada Coach Perkhemahan untuk mendapatkan Tutti Bonus.',
  ];

  const type6 = [
    'Skuad akan diberikan 5 portfolio untuk melaburkan Ringgit Tutti, 5 portfolio tersebut akan diumumkan pada Taklimat 2',
    'Skuad boleh mengkaji portfolio-portfolio tersebut untuk menentukan portfolio mana adalah pilihan pelaburan skuad masing-masing',
    'Skuad boleh bermula melabur pada hari pertama kem.',
    'Masa melabur adalah dari jam 12.00 malam – 7.00 pagi.',
    'Harga setiap portfolio akan diumumkan semasa pasaran TUTTI Investment dibuka.',
  ];

  const type7 = [
    'Sekiranya anda melanggar peraturan kem, saman sticker akan diberikan',
    'Markah pasukan anda akan ditolak',
    'Tutti On Time : Markah pasukan akan ditolak sekiranya berkumpul lewat',
    'Saman Merah (tolah 20 markah): Tidak mengikut aktiviti, Tidak Menepati Masa, Merokok, Berjudi , Berkata lucah, bergaduh, Pakaian menjolok mata, barang emas,seluar pendek, Berdua-duaan…',
    'Saman Kuning (tolak 10 markah): TIdak berpakaian kemas, Tidak tidur pada waktu ditetapkan, Tidak menghormati barisan AJK Penganjur, Kuku panjang & penampilan diri tidak sopan/kemas',
    'Sticker saman harus ditampalkan pada Tutti Bank Book',
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
            Penolong Ketua
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="xl" style={styles.contentHeader}>
            Peranan Penolong Ketua
          </Text>
          {peranan.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {index + 1}. {text}
            </Text>
          ))}

          <Div style={{height: 20}} />

          <Text fontSize="xl" style={styles.contentHeader}>
            Sistem Pemarkahan
          </Text>
          <Text fontSize="lg" style={styles.contentText} textAlign="center">
            RINGGIT TUTTI
          </Text>
          <Div style={{height: 20}} />

          <Image
            minH={300}
            maxH={400}
            minW={20}
            maxW={100}
            resizeMethod="resize"
            resizeMode="contain"
            alignSelf="center"
            source={require('../../../../assets/content/Pen0.jpg')}
          />

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            #1: Modul Harian
          </Text>
          {type1.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            #2: Misi
          </Text>
          {type2.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            #3: Bonus
          </Text>
          {type3.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            #4 Tender
          </Text>
          {type4.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            #5 TUTTI Power Hour
          </Text>
          {type5.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            #6 TUTTI Investment
          </Text>
          {type6.map((text, index) => (
            <Text key={index} fontSize="lg" style={styles.contentText}>
              {text}
            </Text>
          ))}

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Tutti Saman
          </Text>
          {type7.map((text, index) => (
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
  contentText: {color: '#fefefe', marginBottom: 10},
});

export default Penolong;
