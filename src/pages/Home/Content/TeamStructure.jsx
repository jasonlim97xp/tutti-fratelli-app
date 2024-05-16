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

const TeamStructure = ({navigation}) => {
  const paragraph = [
    'A good team should have the right person for the right position.',
    'Each role is equally important. Everyone is the TULANG BELAKANG of the team.',
    'Not just for the 4 days of the camp, but from today onwards, you all will be working together, have fun, laugh and cry together towards the end of the Tutti journey! So make sure you all choose wisely when completing the STRUKTUR SKUAD! It’s NOW or NEVER!',
    'At the end of your Tutti journey, you’ll be surprised at how much you’ll miss the mesyuarat skuad you used to have with the team, the moments you all fight for the Tutti World Cup during camp. The joy & laughter, the wonderful memories – that’s the MAGIC of Tutti! Be prepared to embrace it!',
  ];

  const wisel = [
    {
      item: 'Ketua',
      count: 'Panjang',
    },
    {
      item: 'Penolong Ketua',
      count: 'Panjang 2x',
    },
    {
      item: 'Setiausaha',
      count: 'Pendek 2x, Panjang',
    },
    {
      item: 'Kuartermaster',
      count: 'Panjang, Pendek',
    },
    {
      item: 'Semua Ahli',
      count: 'Panjang 3x',
    },
    {
      item: 'Emergency',
      count: 'Tanpa Henti',
    },
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
            Structur Skuad
          </Text>
        </Div>

        <Div style={{height: 20}} />

        <Div style={styles.contentContainer}>
          <Div style={{paddingHorizontal: 20}}>
            {paragraph.map((text, index) => (
              <Text key={index} fontSize="lg" m={5} style={styles.contentText}>
                {text}
              </Text>
            ))}
          </Div>
          <Div style={{height: 30}} />

          <Image
            minH={300}
            minW={400}
            maxW={screenWidth}
            resizeMethod="contain"
            source={require('../../../assets/content/teamstructure.png')}
          />

          <Div style={{height: 20}} />
          <Div style={{paddingHorizontal: 20}}>
            <Text fontSize="xl" style={styles.contentHeader}>
              Tiupan Wisel
            </Text>
            {wisel.map((item, index) => (
              <Div
                key={index}
                flexDir="row"
                justifyContent="space-around"
                style={{marginBottom: 8}}>
                <Text fontSize="lg" style={styles.contentText}>
                  {item.item}
                </Text>
                <Text style={{flex: 1, textAlign: 'right', color: '#fefefe'}}>
                  {item.count}
                </Text>
              </Div>
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

export default TeamStructure;
