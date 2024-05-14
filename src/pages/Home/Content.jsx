import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const Content = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: '#211134', minHeight: '100%', paddingTop: 20}}>
        <Div alignItems="center">
          <Image
            h={100}
            w={100}
            m={10}
            rounded="circle"
            source={require('../../assets/ktf_logo.webp')}
          />

          <Text fontSize="4xl" style={styles.title}>
            Campers Guide
          </Text>
        </Div>

        <Div style={{height: 50}} />

        <Div
          style={{
            marginHorizontal: '8%',
            borderRadius: 20,
            backgroundColor: 'rgba(111, 90, 136, 0.5)',
            paddingHorizontal: 20,
            paddingVertical: 40,
          }}>
          <Text fontSize="xl" style={{color: '#fefefe'}}>
            This year, with its 24th anniversary on its way, we have a new
            mission mission – To make this journey the best memory in Tutti
            history! It may be tough, but we promise that it would be the BEST
            YOUTH CAMP ever joined before!! Every touchdown is a chance, each
            fight counts! Be ready to hit every game with a bang and create
            history in Camp Tutti Fratelli 2019!!
          </Text>
        </Div>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontWeight: '900',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 200,
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
  textContainer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  multipleContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    padding: 5,
    backgroundColor: 'rgba(111, 90, 136, 0.5)',
  },
  multipleImageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  multipleImage: {
    width: 200,
    height: 200,
  },
});

export default Content;
