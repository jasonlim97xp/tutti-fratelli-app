import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const PastYearTema = [
  {
    id: 1,
    year: 1995,
    theme: 'Semua Insan Bersaudara',
  },
  {
    id: 2,
    year: 1997,
    theme: 'Semua Insan Bersaudara – Focus-Youth',
  },
  {
    id: 3,
    year: 1998,
    theme: 'Spread Our Arms of Friendship to Touch The World of Tomorrow',
  },
  {
    id: 4,
    year: 1999,
    theme:
      'Our Society, Our Responsibility, A Mixture Towards The New Frontier!',
  },
  {
    id: 5,
    year: 2000,
    theme: 'Revolusi Tutti, Dimensi IT!',
  },
  {
    id: 6,
    year: 2001,
    theme: 'Serumpun, Sekata, Sehati, Sejiwa!',
  },
  {
    id: 7,
    year: 2002,
    theme: 'Unity In Diversity!',
  },
  {
    id: 8,
    year: 2003,
    theme: 'Voice Of Humanity : Echoes Today, Sound Tomoorrow!',
  },
  {
    id: 9,
    year: 2004,
    theme: 'Humanitatem Ad Pacem - Peace Thru Humanity!',
  },
  {
    id: 10,
    year: 2005,
    theme: 'Tutti For Humanity : Educate, Engage & Empower!',
  },
  {
    id: 11,
    year: 2006,
    theme: 'Designed By The Heart & Run With Passion.',
  },
  {
    id: 12,
    year: 2007,
    theme: 'One Mission, One Revolution, One Destination.',
  },
  {
    id: 13,
    year: 2008,
    theme: 'Symphony Of Modern Humanity: Simfoni Kemanusiaan',
  },
  {
    id: 14,
    year: 2009,
    theme: 'Rela Dipimpin, Untuk Memimpin',
  },
  {
    id: 15,
    year: 2010,
    theme: 'Inspirasi Anda, Aspirasi Kami',
  },
  {
    id: 16,
    year: 2011,
    theme:
      'Teenagers Unite To Transform Inspiration For RC through Adventure, Teamwork, Excellence, Leadership, Life & Independence!!!',
  },
  {
    id: 17,
    year: 2012,
    theme: 'TransformUS – Matrix of Humanitarian Evolution!!',
  },
  {
    id: 18,
    year: 2013,
    theme: 'Tutti Fratelli – Dekat di Mata, Lekat di Hati!',
  },
  {
    id: 19,
    year: 2014,
    theme: 'KTF : Nadi Kemanusiaan (The pulse of Humanity)',
  },
  {
    id: 20,
    year: 2015,
    theme: 'Humanitarian Adventure: Experience, Educate, Empower',
  },
  {
    id: 21,
    year: 2016,
    theme: 'Dahulu, Kini, Selamanya (Then, Now, Forever)',
  },
  {
    id: 22,
    year: 2017,
    theme: 'Tutti Fratelli : Everywhere for Everyone',
  },
  {
    id: 23,
    year: 2018,
    theme: 'KTF: Reviving Humanity Through YOUth',
  },
  {
    id: 24,
    year: 2019,
    theme: 'Whatever It Takes, Champions Never Rest!',
  },
];

const History = ({navigation}) => {
  const contentObject = {
    paragraph1:
      'Diikhtiharkan pada tahun 1995, penganjuran Kem Tutti Fratelli telah dipelopori oleh Majlis EXCO Belia 1995 yang diterajui oleh Saudara Shreenath C., (Pengerusi MEB 1995). Namun, penganjurannya tidak terhenti pada tahun tersebut sahaja. Tradisi penganjurannya diteruskan pada tahun 1997 oleh barisan Majlis EXCO Belia 1997 di bawah pimpinan Pengerusi Majlis EXCO Belia 1997 iaitu Saudara Jusri Ong.',
    paragraph2:
      'Seterusnya, penganjuran Kem Tutti Fratelli telah diambil alih oleh Pasukan Bantuan Sukarela 43 bersama Majlis EXCO Belia sebagai satu projek usaha sama. Pada tahun 1998, satu keputusan dinamik telah diambil untuk meneruskan legenda Kem Tutti Fratelli dan dijadikan satu perkhemahan tahunan belia terbesar bagi Bulan Sabit Merah Malaysia Daerah Klang. Begitu kuatnya iltizam barisan penganjur kem Tutti fratelli untuk terus membekalkan ramuan dan formula kepimpinan kepada para belia proaktif BSMM.',
    paragraph3:
      'TUTTI FRATELLI bermaksud “Semua Insan Bersaudara!” dalam bahasa Itali dipetik dari buku hasil tulisan pengasas persatuan yang bertajuk “Satu Kenangan di Solferino”. Dengan bermulanya penganjuran Kem Tutti Fratelli, maka bermulalah penganjuran satu perkhemahan yang canggih lagi efektif dengan cetusan idea untuk meneruskan detik-detik kegemilangan yang lalu. Satu matlamat yang lebih murni, impian yang lebih besar dan satu semangat yang berkobar-kobar, Kem Tutti Fratelli 1995 yang disertai oleh hanya 70 orang peserta kini bertambah menjadi seramai 350 orang belia BSMM.',
    paragraph4:
      'Hari ini, tahun ini, Kem Tutti Fratelli telah memasuki tahun ke-25 penganjurannya! Lebih mantap, lebih hebat & lebih gagah!! Ahli keluarga Tutti kian bertambah & legenda Tutti akan berterusan untuk selama-lamanya. Sertailah kehebatan dan kemeriahan penganjuran perkhemahan terbesar dalam sejarah belia! Hayatilah kegemilangan dan keunggulannya..!!',
  };

  const paragraphs = Object.entries(contentObject).map(([key, value]) => (
    <Text key={key} fontSize="lg" style={styles.contentText}>
      {value}
    </Text>
  ));

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
            Welcome To The {'\n'}Best Camp In The World!
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          {paragraphs}

          <Div style={{height: 20}} />
          <Text style={styles.contentHeader}>
            Semua Tema Kem Tutti Fratelli Dahulu
          </Text>

          {PastYearTema.map(tema => (
            <Text style={styles.contentText} key={tema.id}>
              Tahun {tema.year}
              {'\n'}
              {tema.theme}
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

export default History;
