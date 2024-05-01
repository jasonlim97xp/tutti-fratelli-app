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

const ENTRIES1 = [
  {
    id: 1,
    title: 'Welcome to the best camp in the world!',
    illustration:
      'https://scontent.fkul2-2.fna.fbcdn.net/v/t1.6435-9/38026314_1938032023161698_1872911594267082752_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KDQeca1dtrQQ7kNvgEEXcC1&_nc_ht=scontent.fkul2-2.fna&oh=00_AfADOUBH3rmHhCCa19IMGoUiD7txS6KzNUmEyNezRKBtjA&oe=6659A8E8',
  },
  {
    id: 2,
    title: 'Earlier this morning, NYC',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 3,
    title: 'White Pocket Sunset',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    id: 4,
    title: 'Acrocorinth, Greece',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    id: 5,
    title: 'The lone tree, majestic landscape of New Zealand',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const {width: screenWidth} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderLine1Item = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity onPress={() => console.log(`hello ${item.id}`)}>
        <View style={styles.item}>
          <ParallaxImage
            source={{uri: item.illustration}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <View style={styles.textContainer}>
            <Text style={styles.imageTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMoreItem = ({item, index}) => {
    return (
      <View style={styles.multipleContainer}>
        <View style={styles.multipleImageContainer}>
          <Image
            source={{uri: item.illustration}}
            style={styles.multipleImage}
          />
        </View>
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>
    );
  };

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
        <Div style={{marginTop: 40}}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={entries}
            renderItem={renderLine1Item}
            hasParallaxImages={true}
          />
        </Div>

        <Div style={{marginVertical: 20, paddingHorizontal: '8%'}}>
          <Text fontSize="4xl" style={styles.title}>
            Main Information
          </Text>
        </Div>
        <Carousel
          sliderWidth={screenWidth}
          itemWidth={200}
          data={entries}
          renderItem={renderMoreItem}
          firstItem={0}
          loop={true}
        />

        <Div style={{marginVertical: 20, paddingHorizontal: '8%'}}>
          <Text fontSize="4xl" style={styles.title}>
            Things You Should Know
          </Text>
        </Div>
        <Carousel
          sliderWidth={screenWidth}
          itemWidth={200}
          data={entries}
          renderItem={renderMoreItem}
          firstItem={0}
          loop={true}
        />

        <Div style={{height: 50}} />
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

export default Home;
