import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const {width: screenWidth} = Dimensions.get('window');

const AnakAngkat = ({navigation}) => {
  const paragraph = [
    '1. BSMM Klang Logo',
    '2. Nama skuad',
    '3. Kem Tutti Fratelli ke-25 Logo',
    '4. Logo skuad (including nombor skuad)',
    '5. Perkataan “Kem Tutti Fratelli” ',
    '6. Lebar = 45cm; Tinggi = 135cm - 140cm ',
    '(Tiang bendera dan kain bendera akan disediakan oleh Coach)',
  ];

  const ball = ['1. Logo skuad', '2. Nombor skuad', '3. Size bola sepak = 5'];

  const bracelet = [
    '1. Dibuat daripada manik dan tali elastic',
    '2. Bahan-bahan tidak disediakan',
    '3. Setiap ahli skuad mesti buat sekurang-kurangnya 1, lebih banyak lebih bagus',
    '(Mungkin ada bonus untuk skuad yang ada paling banyak)',
  ];

  const name_tag = [
    '1. Lanyard ikut warna perkampungan',
    '2. Design tag bebas',
    '3. BSMM Klang Logo',
    '4. Logo skuad',
    '5. Nama skuad',
    '6. Kem Tutti Fratelli ke-25 Logo',
    '7. Nombor skuad',
    '8. Nama dan Jawatan',
    '9. Logo 25th anniversary',
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
            Persediaan Anak Angkat
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Text fontSize="xl" style={styles.contentHeader}>
            Bendera Skuad
          </Text>
          <Div style={{paddingHorizontal: 20}}>
            {paragraph.map((text, index) => (
              <Text key={index} fontSize="lg" m={5} style={styles.contentText}>
                {text}
              </Text>
            ))}
          </Div>
          <Div style={{height: 10}} />
          <Image
            minH={300}
            minW={400}
            maxW={screenWidth}
            resizeMethod="resize"
            resizeMode="contain"
            alignSelf="center"
            source={require('../../../assets/content/Pen1.jpg')}
          />

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Anak Angkat Skuad - Bola sepak
          </Text>
          <Div style={{paddingHorizontal: 20}}>
            {ball.map((text, index) => (
              <Text key={index} fontSize="lg" m={5} style={styles.contentText}>
                {text}
              </Text>
            ))}
          </Div>
          <Div style={{height: 10}} />
          <Image
            minH={300}
            minW={400}
            maxW={screenWidth}
            resizeMethod="resize"
            resizeMode="contain"
            alignSelf="center"
            source={require('../../../assets/content/Pen2.png')}
          />
          <Image
            minH={300}
            minW={400}
            maxW={screenWidth}
            resizeMethod="resize"
            resizeMode="contain"
            alignSelf="center"
            source={require('../../../assets/content/Pen3.png')}
          />

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Anak Angkat Individu - Friendship Bracelets
          </Text>
          <Div style={{paddingHorizontal: 20}}>
            {bracelet.map((text, index) => (
              <Text key={index} fontSize="lg" m={5} style={styles.contentText}>
                {text}
              </Text>
            ))}
          </Div>
          <Div style={{height: 10}} />
          <Image
            minH={300}
            minW={400}
            maxW={screenWidth}
            resizeMethod="resize"
            resizeMode="contain"
            alignSelf="center"
            source={require('../../../assets/content/Pen4.jpg')}
          />

          <Div style={{height: 40}} />
          <Text fontSize="xl" style={styles.contentHeader}>
            Tag Nama Individu
          </Text>
          <Div style={{paddingHorizontal: 20}}>
            {name_tag.map((text, index) => (
              <Text key={index} fontSize="lg" m={5} style={styles.contentText}>
                {text}
              </Text>
            ))}
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
    // paddingHorizontal: 20,
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

export default AnakAngkat;
