import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const LaguTema = ({navigation}) => {
  const lyrics = [
    'Di malam sepi,',
    'Risaunya hati,',
    'Saudara tak bererti lagi...',
    '',
    'Tenangkan fikiran,',
    'Hulurkan tanganmu,',
    'Kan tercapai dunia damai',
    'Milikmu, milikku...',
    '',
    'Kerana kedamaian,',
    'Hasil jiwa murni,',
    'Rela tabah hati,',
    'Sedia Memaafkan...',
    '',
    'Kau dan aku,',
    'Kita Bersaudara...',
    'Renungkanlah..',
    'Biar kau dan aku,',
    'Terangi dunia,',
    'Mara ke hadapan,',
    'Hulurkanlah...',
    'Tangnmu untuk dunia damai',
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
            Lagu Tema
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
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

export default LaguTema;
