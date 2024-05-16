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
    line: 1,
    title: 'Tutti 25 Information',
    page: 'Info',
    illustration: require('../../assets/home_pic/main.jpg'),
  },
  {
    id: 2,
    line: 1,
    title: 'Welcome to the best camp in the world!',
    page: 'History',
    illustration: require('../../assets/home_pic/history.jpg'),
  },
  {
    id: 3,
    line: 1,
    title: 'Peta Perkhemahan',
    page: 'Map',
    illustration: require('../../assets/home_pic/map.jpeg'),
  },
  {
    id: 4,
    line: 1,
    title: 'Safety Guideline',
    page: 'Safety',
    illustration: require('../../assets/home_pic/safety.jpeg'),
  },
];

const ENTRIES2 = [
  {
    id: 1,
    line: 2,
    title: 'Struktur Skuad',
    page: 'TeamStructure',
    illustration: require('../../assets/home_pic/structure.jpeg'),
  },
  {
    id: 2,
    line: 2,
    title: 'Taklimat 2 Preparation',
    page: 'Taklimat2',
    illustration: require('../../assets/home_pic/taklimat2.jpg'),
  },
  {
    id: 3,
    line: 2,
    title: 'Anak Angkat Skuad',
    page: 'AnakAngkat',
    illustration: require('../../assets/home_pic/anak.jpeg'),
  },
  {
    id: 4,
    line: 2,
    title: 'Rider Tutti',
    page: 'RiderTutti',
    illustration: require('../../assets/home_pic/rider.jpeg'),
  },
  {
    id: 5,
    line: 2,
    title: 'Awards',
    page: 'Awards',
    illustration: require('../../assets/home_pic/award.jpeg'),
  },
];

const ENTRIES3 = [
  {
    id: 1,
    line: 3,
    title: 'Things to Bring',
    page: 'ThingsToBring',
    illustration: require('../../assets/home_pic/thingstobring.jpeg'),
  },
  {
    id: 2,
    line: 3,
    title: 'Lagu Tema',
    page: 'LaguTema',
    illustration: require('../../assets/home_pic/lagu_tema.jpg'),
  },
  // {
  //   id: 2,
  //   line: 3,
  //   title: 'Disiplin',
  //   page: 'TeamStructure',
  //   illustration: require('../../assets/home_pic/disiplin.jpeg'),
  // },
  {
    id: 3,
    line: 3,
    title: 'Lagu BSMM',
    page: 'LaguBSMM',
    illustration: require('../../assets/home_pic/lagu_bsm.jpeg'),
  },
  {
    id: 4,
    line: 3,
    title: 'Ikrar BSMM',
    page: 'IkrarBSMM',
    illustration: require('../../assets/home_pic/ikrar_bsm.jpeg'),
  },
];

const ENTRIES4 = [
  {
    id: 1,
    line: 4,
    title: 'Ketua',
    page: 'Ketua',
    illustration: require('../../assets/home_pic/ketua.jpeg'),
  },
  {
    id: 2,
    line: 4,
    title: 'Penolong Ketua',
    page: 'Penolong',
    illustration: require('../../assets/home_pic/penolong.jpeg'),
  },
  {
    id: 3,
    line: 4,
    title: 'Setiausaha',
    page: 'Setiausaha',
    illustration: require('../../assets/home_pic/setiausaha.jpeg'),
  },
  {
    id: 4,
    line: 4,
    title: 'Kuartermaster',
    page: 'Kuartermaster',
    illustration: require('../../assets/home_pic/qm.jpeg'),
  },
  {
    id: 5,
    line: 4,
    title: 'Kebudayaan',
    page: 'Kebudayaan',
    illustration: require('../../assets/home_pic/kebu.jpeg'),
  },
  {
    id: 6,
    line: 4,
    title: 'IT & Sosial Media',
    page: 'IT',
    illustration: require('../../assets/home_pic/socialmedia.jpeg'),
  },
  {
    id: 7,
    line: 4,
    title: 'KKK',
    page: 'KKK',
    illustration: require('../../assets/home_pic/kkk.jpeg'),
  },
];

const ENTRIES5 = [
  {
    id: 1,
    line: 5,
    title: 'First Aid Relay',
    page: 'FirstAidRelay',
    illustration: require('../../assets/home_pic/thingstobring.jpeg'),
  },
  {
    id: 2,
    line: 5,
    title: 'Sosial Relay',
    page: 'SosialRelay',
    illustration: require('../../assets/home_pic/thingstobring.jpeg'),
  },
  // {
  //   id: 3,
  //   line: 3,
  //   title: 'Lagu BSMM',
  //   page: 'LaguBSMM',
  //   illustration: require('../../assets/home_pic/lagu_bsm.jpeg'),
  // },
  // {
  //   id: 4,
  //   line: 3,
  //   title: 'Ikrar BSMM',
  //   page: 'IkrarBSMM',
  //   illustration: require('../../assets/home_pic/ikrar_bsm.jpeg'),
  // },
];

const {width: screenWidth} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const selectPage = lineNo => {
    switch (lineNo) {
      case 1:
        return ENTRIES1;
      case 2:
        return ENTRIES2;
      case 3:
        return ENTRIES3;
      case 4:
        return ENTRIES4;
      case 5:
        return ENTRIES5;
      default:
        return;
    }
  };

  const navigateToPages = (id, lineNo) => {
    let page = selectPage(lineNo)?.find(item => item.id === id);
    navigation.navigate(page.page);
  };

  const renderLine1Item = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity onPress={() => navigateToPages(item.id, 1)}>
        <View style={styles.item}>
          <ParallaxImage
            source={item.illustration}
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

  const renderMoreItem = ({item, line, index}) => {
    return (
      <TouchableOpacity onPress={() => navigateToPages(item.id, item.line)}>
        <View style={styles.multipleContainer}>
          <View style={styles.multipleImageContainer}>
            <Image source={item.illustration} style={styles.multipleImage} />
          </View>
          <Text style={styles.imageTitle}>{item?.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: '#211134', minHeight: '100%', paddingTop: 30}}>
        <Div alignItems="center">
          <Image
            h={100}
            w={100}
            m={10}
            rounded="circle"
            source={require('../../assets/ktf_logo.webp')}
          />

          <Text fontSize="4xl" style={styles.title} textAlign="center">
            Kem Tutti Fratelli Ke-25{'\n'}Campers Guide
          </Text>
        </Div>
        <Div style={{marginTop: 40}}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={ENTRIES1}
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
          data={ENTRIES2}
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
          data={ENTRIES3}
          renderItem={renderMoreItem}
          firstItem={0}
          loop={true}
        />

        <Div style={{marginVertical: 20, paddingHorizontal: '8%'}}>
          <Text fontSize="4xl" style={styles.title}>
            Your Role As A...
          </Text>
        </Div>
        <Carousel
          sliderWidth={screenWidth}
          itemWidth={200}
          data={ENTRIES4}
          renderItem={renderMoreItem}
          firstItem={0}
          loop={true}
        />

        {/* <Div style={{marginVertical: 20, paddingHorizontal: '8%'}}>
          <Text fontSize="4xl" style={styles.title}>
            Core Components
          </Text>
        </Div>
        <Carousel
          sliderWidth={screenWidth}
          itemWidth={200}
          data={ENTRIES5}
          renderItem={renderMoreItem}
          firstItem={0}
          loop={true}
        /> */}

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
    textAlign: 'center',
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
