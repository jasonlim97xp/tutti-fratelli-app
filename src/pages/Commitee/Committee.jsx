import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Platform,
} from 'react-native';
import {Div, Text, Image, Collapse} from 'react-native-magnus';

const AJK = [
  {
    id: 1,
    name: 'Shreenath C A/L Venukopalan',
    picture: '',
  },
  {
    id: 2,
    name: 'Agilan Munusamy',
    picture: '',
  },
  {
    id: 3,
    name: 'Lim Fong Ling',
    picture: '',
  },
  {
    id: 4,
    name: 'Ng Sue Huey',
    picture: '',
  },
  {
    id: 5,
    name: 'Jason Lim Zhen Shen',
    picture: '',
  },
];

const Role = [
  {
    id: 1,
    title: 'Pengerusi',
    ajk: [1],
  },
  {
    id: 2,
    title: 'Timbalan Pengerusi',
    ajk: [2],
  },
  {
    id: 3,
    title: 'Setiausaha',
    ajk: [3, 4, 5, 6, 7, 2, 9, 10, 11, 12],
  },
];

const {width: screenWidth} = Dimensions.get('window');

const Committee = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(AJK);
  }, []);

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
            Kem Tutti Fratelli Ke-25 {'\n'} Organizing Committee
          </Text>
        </Div>
        <Div style={{paddingHorizontal: 30, marginTop: 20}}>
          {Role.map((roles, index) => (
            <Collapse key={index} defaultActive style={{marginBottom: 20}}>
              <Collapse.Header
                color="white"
                bg="black"
                fontSize="lg"
                p="xl"
                px="none">
                {roles.title}
              </Collapse.Header>
              <Collapse.Body
                pb="xl"
                justifyContent="center"
                flexDir="row"
                gap={10}
                flexWrap="wrap"
                minH={100}>
                {roles.ajk.map(ajkId => {
                  const member = AJK.find(item => item.id === ajkId);
                  return (
                    <View key={ajkId} style={{alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 100,
                          width: 100,
                          margin: 10,
                          borderRadius: 50,
                        }}
                        source={require('../../assets/ktf_logo.webp')}
                      />
                      <Text>{member ? member.name : ''}</Text>
                    </View>
                  );
                })}
              </Collapse.Body>
            </Collapse>
          ))}
        </Div>
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
    textAlign: 'center',
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

export default Committee;
