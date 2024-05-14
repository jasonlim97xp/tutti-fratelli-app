import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';
import YoutubePlayer from 'react-native-youtube-iframe';

const LaguBSMM = ({navigation}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const lyrics = [
    'Bulan Sabit Merah Di Malaysia',
    'Giat Berjasa Untuk Negara',
    'Tidak Kira Kaum Dan Agama',
    'Waktu Aman Atau Bahaya',
    '',
    'Di Mana Jua Adanya Sengsara',
    'Di Sana Ada Kita',
    'Di Darat Dan Laut Kita Bersedia',
    'Walupun Diancam Bahaya',
    '',
    'Bulan Sabit Merah Gerakan Sedunia',
    'Mambantu Semua Yang Menderita',
    'Badan Sukarela Berkhidmat',
    'Dengan Tabah Dan Bersemangat......',
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
            Lirik Lagu Bulan Sabit Merah Malaysia
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <YoutubePlayer
            height={230}
            play={playing}
            videoId={'tcPr8R0VlZ4'}
            onChangeState={onStateChange}
          />

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

export default LaguBSMM;
