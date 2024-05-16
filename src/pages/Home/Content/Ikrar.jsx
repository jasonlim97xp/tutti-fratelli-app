import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const IkrarBSMM = ({navigation}) => {
  const ikrar = [
    'Bahawa kami,',
    'Ahli Persatuan Bulan Sabit Merah Malaysia,',
    'berikrar, akan taat setia kepada',
    'Duli Yang Maha Mulia Sri Paduka Baginda',
    'Yang Di-Pertuan Agong',
    'serta pemerintah-pemerintah di negari kami',
    'berdasarkan kepada prinsip-prinsip rukun negara',
    '',
    'Bahawa kami berikrar',
    'akan sentiasa patuh pada perlembagaan',
    'dan undang-undang serta arahan persatuan',
    'walau di mana kami berada.',
    '',
    'Bahawa kami berikrar',
    'akan sentiasa memberi khidmat sukarela',
    'kepada yang sakit dan menderita',
    'di waktu aman atau bencana',
    'berdasarkan prinsip Bulan Sabit Merah seperti berikut:',
    '',
    'Kemanusiaan',
    'Kesaksamaan',
    'Keberkecualian',
    'Kebebasan',
    'Khidmat Sukarela',
    'Bersatu',
    'Kesejagatan',
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
            Ikrar Bulan Sabit Merah Malaysia
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          {ikrar.map((text, index) => (
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
  contentText: {color: '#fefefe', textAlign: 'center'},
});

export default IkrarBSMM;
