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
    illustration:
      'https://scontent.fkul8-1.fna.fbcdn.net/v/t31.18172-8/20117183_1756738344624401_7434890625999828315_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFuRSC6tp3ZGlrnX_GBLhOpu0-a3fXr5he7T5rd9evmFzGLLhEgxqa-BkzFkZ6u96wesVIGqRoV1bMH5nZBNhmf&_nc_ohc=JkCUhBUf5qcQ7kNvgHhwP5Z&_nc_ht=scontent.fkul8-1.fna&oh=00_AYCRyO6GUz-f0kOR8C1P7utTqMdbmRXnwV1BtYqEoqmSLA&oe=666A61AC',
  },
  {
    id: 2,
    line: 1,
    title: 'Welcome to the best camp in the world!',
    page: 'History',
    illustration:
      'https://scontent.fkul2-2.fna.fbcdn.net/v/t1.6435-9/38026314_1938032023161698_1872911594267082752_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KDQeca1dtrQQ7kNvgEEXcC1&_nc_ht=scontent.fkul2-2.fna&oh=00_AfADOUBH3rmHhCCa19IMGoUiD7txS6KzNUmEyNezRKBtjA&oe=6659A8E8',
  },
  {
    id: 3,
    line: 1,
    title: 'Peta Perkhemahan',
    page: 'Map',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    id: 4,
    line: 1,
    title: 'Safety Guideline',
    page: 'Safety',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
];

const ENTRIES2 = [
  {
    id: 1,
    line: 2,
    title: 'Struktur Skuad',
    page: 'TeamStructure',
    illustration:
      'https://scontent.fkul2-2.fna.fbcdn.net/v/t1.6435-9/38026314_1938032023161698_1872911594267082752_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KDQeca1dtrQQ7kNvgEEXcC1&_nc_ht=scontent.fkul2-2.fna&oh=00_AfADOUBH3rmHhCCa19IMGoUiD7txS6KzNUmEyNezRKBtjA&oe=6659A8E8',
  },
  {
    id: 2,
    line: 2,
    title: 'Taklimat 2 Preparation',
    page: 'TeamStructure',
    illustration:
      'https://scontent.fkul8-2.fna.fbcdn.net/v/t31.18172-8/20286786_1759949614303274_394929505210774845_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3tbaKmxD-Ihv5uZ4kXf9v9V9n1wW-5LD1X2fXBb7ksPC2m1Z0jubC2tYuUgx7yfNZQndHZEIrwc3oK_EVtKMn&_nc_ohc=aslFIgZTbUYQ7kNvgEwf3Pv&_nc_ht=scontent.fkul8-2.fna&oh=00_AYDkvIps9Ksv7NiKMt0_p9k3qaCTDONVBAhxn52MnO5J6A&oe=666A8ED7',
  },
  {
    id: 3,
    line: 2,
    title: 'Lagu Tema',
    page: 'LaguTema',
    illustration:
      'https://scontent.fkul8-5.fna.fbcdn.net/v/t31.18172-8/20157777_1757031741261728_8174028234849441856_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGmlr62BzctSuMUWDMUvXWbL3khQ7ye_HcveSFDvJ78dzLNRVVF_ph4l72HmySex3awaLSwZaZtuTxIESiRsTiI&_nc_ohc=y73fx3qtkMAQ7kNvgHsm1zd&_nc_ht=scontent.fkul8-5.fna&oh=00_AYCWMri6zA7JmZYxXrKNcDVYU9LGyXfj3uQ-V4iGP9Eyww&oe=666A78AC',
  },
  {
    id: 4,
    line: 2,
    title: 'Rider Tutti',
    page: 'RiderTutti',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 5,
    line: 2,
    title: 'Awards',
    page: 'Awards',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
];

const ENTRIES3 = [
  {
    id: 1,
    line: 3,
    title: 'Things to Bring',
    page: 'ThingsToBring',
    illustration:
      'https://scontent.fkul2-2.fna.fbcdn.net/v/t1.6435-9/38026314_1938032023161698_1872911594267082752_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KDQeca1dtrQQ7kNvgEEXcC1&_nc_ht=scontent.fkul2-2.fna&oh=00_AfADOUBH3rmHhCCa19IMGoUiD7txS6KzNUmEyNezRKBtjA&oe=6659A8E8',
  },
  {
    id: 2,
    line: 3,
    title: 'Disiplin',
    page: 'TeamStructure',
    illustration:
      'https://scontent.fkul8-2.fna.fbcdn.net/v/t31.18172-8/20286786_1759949614303274_394929505210774845_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3tbaKmxD-Ihv5uZ4kXf9v9V9n1wW-5LD1X2fXBb7ksPC2m1Z0jubC2tYuUgx7yfNZQndHZEIrwc3oK_EVtKMn&_nc_ohc=aslFIgZTbUYQ7kNvgEwf3Pv&_nc_ht=scontent.fkul8-2.fna&oh=00_AYDkvIps9Ksv7NiKMt0_p9k3qaCTDONVBAhxn52MnO5J6A&oe=666A8ED7',
  },
  {
    id: 3,
    line: 3,
    title: 'Lagu BSMM',
    page: 'LaguBSMM',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 4,
    line: 3,
    title: 'Ikrar BSMM',
    page: 'IkrarBSMM',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 5,
    line: 3,
    title: 'Basic First Aid Skills',
    page: 'FirstAidSkill',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
];

const ENTRIES4 = [
  {
    id: 1,
    line: 4,
    title: 'Ketua',
    page: 'TeamStructure',
    illustration:
      'https://scontent.fkul2-2.fna.fbcdn.net/v/t1.6435-9/38026314_1938032023161698_1872911594267082752_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KDQeca1dtrQQ7kNvgEEXcC1&_nc_ht=scontent.fkul2-2.fna&oh=00_AfADOUBH3rmHhCCa19IMGoUiD7txS6KzNUmEyNezRKBtjA&oe=6659A8E8',
  },
  {
    id: 2,
    line: 4,
    title: 'Penolong Ketua',
    page: 'TeamStructure',
    illustration:
      'https://scontent.fkul8-2.fna.fbcdn.net/v/t31.18172-8/20286786_1759949614303274_394929505210774845_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3tbaKmxD-Ihv5uZ4kXf9v9V9n1wW-5LD1X2fXBb7ksPC2m1Z0jubC2tYuUgx7yfNZQndHZEIrwc3oK_EVtKMn&_nc_ohc=aslFIgZTbUYQ7kNvgEwf3Pv&_nc_ht=scontent.fkul8-2.fna&oh=00_AYDkvIps9Ksv7NiKMt0_p9k3qaCTDONVBAhxn52MnO5J6A&oe=666A8ED7',
  },
  {
    id: 3,
    line: 4,
    title: 'Setiausaha',
    page: 'RiderTutti',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 4,
    line: 4,
    title: 'Kuartermaster',
    page: 'Kuartermaster',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 5,
    line: 4,
    title: 'Kebudayaan',
    page: 'LaguTema',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 6,
    line: 4,
    title: 'IT & Sosial Media',
    page: 'Awards',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 7,
    line: 4,
    title: 'KKK',
    page: 'KKK',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
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

  const renderMoreItem = ({item, line, index}) => {
    console.log('Item', item);
    return (
      <TouchableOpacity onPress={() => navigateToPages(item.id, item.line)}>
        <View style={styles.multipleContainer}>
          <View style={styles.multipleImageContainer}>
            <Image
              source={{uri: item?.illustration}}
              style={styles.multipleImage}
            />
          </View>
          <Text style={styles.imageTitle}>{item?.title}</Text>
        </View>
      </TouchableOpacity>
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
            Things To Know As A...
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
            Guide For Champions
          </Text>
        </Div>
        <Carousel
          sliderWidth={screenWidth}
          itemWidth={200}
          data={ENTRIES4}
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
