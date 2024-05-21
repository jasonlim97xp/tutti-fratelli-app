import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Safety = ({navigation}) => {
  const peraturanAmContentObject = {
    paragraph1:
      '1. Semua peserta hendaklah menghormati dan menurut perintah kem komandan dan AJK penganjur.',
    paragraph2:
      '2. Para peserta hendaklah mengikuti semua aktiviti perkhemahan kecuali atas sebab-sebab tertentu.',
    paragraph3:
      '3. Ketepatan masa amat dititikberatkan di dalam perkhemahan ini. Semua peserta harus berada di tempat perhimpunan 5 minit sebelum aktiviti dimulakan.',
    paragraph4:
      '4. Peserta harus memakai kasut dengan berstoking sepanjang perkhemahan. Selipar hanya dibenarkan pada waktu mandi atau tidur sahaja.',
    paragraph5:
      '5. Peserta harus melaporkan segala kerosakan paralatan kem dan juga kecederaan atau kemalangan yang berlaku kepada AJK penganjur.',
    paragraph6:
      '6. Setiap peserta mestilah bersedia menghadapi sebarang tekanan atau cabaran pada bila-bila masa.',
    paragraph7:
      '7. Peserta digalakan memakai pakaian berkolar atau yang bersesuaian dengan aktiviti yang dijalankan. Cara permakaian harus sentiasa kemas dan pakaian yang menjolok mata dilarang sama sekali.',
    paragraph8:
      '8. Peserta dilarang keras berkomunikasi dengan orang luar semasa perkhemahan.',
    paragraph9:
      '9. Peserta dilarang meninggalkan kawasan perkhemahan kecuali mendapat kebenaran daripada kem komandan.',
    paragraph10:
      '10. Dilarang membuat bising dan merayau-rayau pada waktu malam.',
    paragraph11:
      '11. Dilarang membuang sampah merata-rata. Sampah sarap harus dibuang ke dalam tempat yang telah disediakan.',
    paragraph12: 'Rambut dan kuku haruslah pendek dan bersih.',
    paragraph13:
      '13. Dilarang membawa makanan dan minuman ringan seperti Twisties, Coke dan lain-lain. Minuman keras dilarang sama sekali di kawasan perkhemahan.',
    paragraph14:
      '14. Tuturcara, tatatertib dan tingkah laku haruslah dijaga pada setiap masa.',
    paragraph15:
      '15. Segala barang keperluan persendirian dan kumpulan adalah tangggungjawab individu dan kumpulan sendiri. Pihak penganjur tidak akan bertanggungjawab ke atas segala kerosakan dan kehilangan yang berlaku.',
    paragraph16:
      '16. Pembawaan “handphone” hanya dibenarkan oleh Setiausaha kumpulan untuk buat laporan harian. Peserta lain tidak dibenarkan membawa “handphone”.',
  };

  const peraturanAmParagraphs = Object.entries(peraturanAmContentObject).map(
    ([key, value]) => (
      <Text key={key} fontSize="lg" style={styles.contentText}>
        {value}
      </Text>
    ),
  );

  const penginapanContentObject = {
    paragraph1:
      '1. Peserta lelaki tidak dibenarkan berada di kawasan perkhemahan peserta perempuan dan sebaliknya.',
    paragraph2:
      '2. Kebersihan kawasan perkhemahan adalah tanggungjawab para peserta pada setiap masa.',
    paragraph3:
      '3. Jika berlaku sebarang kecemasan, sila laporkan kepada Pegawai Keselamatan atau AJK penganjur dengan segera.',
    paragraph4: '4. “Sport Check” akan dijalankan pada bila-bila masa.',
    paragraph5: '5. Pembahagian tapak akan dijalankan oleh AJK penganjur.',
    paragraph6:
      '6. Peserta tidak dibenarkan membawa orang luar masuk ke dalam kawasan perkhemahan.',
    paragraph7:
      '7. * Segala aktiviti akan dihentikan pada 11.00p.m dan semua peserta dikehendaki masuk ke kawasan penginapan masing-masing.',
  };

  const penginapanParagraphs = Object.entries(penginapanContentObject).map(
    ([key, value]) => (
      <Text key={key} fontSize="lg" style={styles.contentText}>
        {value}
      </Text>
    ),
  );

  const dilarangContentObject = {
    paragraph1: '1. Merokok semasa perkhemahan.',
    paragraph2:
      '2. Memakai barangan emas aksesori seperti cicin, anting-anting dan lain-lain.',
    paragraph3:
      '3. Memakai pakaian yang menjolok mata seperti seluar pendek, singlet, “baby T” dan lain-lain.',
    paragraph4:
      '4. Berdua-duaan (lelaki dan perempuan) di mana-mana tempat pada bila-bila masa.',

    paragraph5: '5. Bergaduh antara satu sama lain.',
    paragraph6: '6. Mengeluarkan kata-kata lucah.',
    paragraph7: '7. Berjudi semasa perkhemahan.',
    paragraph8:
      '8. Membawa peralatan merbahaya ke dalam kawasan perkhemahan kecuali mendapat kebenaran.',
    paragraph9:
      '9. Membawa peralatan electronik seperti “tablet”, “laptop” dan lain-lain."',
  };

  const dilarangParagraphs = Object.entries(dilarangContentObject).map(
    ([key, value]) => (
      <Text key={key} fontSize="lg" style={styles.contentText}>
        {value}
      </Text>
    ),
  );

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
            Safety Guideline
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text style={styles.contentHeader}>Peraturan AM</Text>
          {peraturanAmParagraphs}

          <Div style={{height: 30}} />
          <Text style={styles.contentHeader}>Tempat Penginapan</Text>
          {penginapanParagraphs}
          <Text fontSize="lg" style={styles.contentText}>
            *akan berubah mengikut keadaan.
          </Text>

          <Div style={{height: 30}} />
          <Text style={styles.contentHeader}>Peserta Dilarang Keras</Text>
          {dilarangParagraphs}
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

export default Safety;
