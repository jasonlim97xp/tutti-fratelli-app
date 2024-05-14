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
    picture: '1.png',
  },
  {
    id: 2,
    name: 'Agilan Munusamy',
    picture: '2.png',
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
  {
    id: 6,
    name: 'Soe Min Ming',
    picture: '',
  },
  {
    id: 7,
    name: 'Syamir Alihan Bin Showkat Ali',
    picture: '',
  },
  {
    id: 8,
    name: 'Firdaus Anwar Bin Mustafa',
    picture: '',
  },
  {
    id: 9,
    name: 'Dinesgumar A/L Nagaiah',
    picture: '',
  },
  {
    id: 10,
    name: 'Ehswarakali Sadasivam',
    picture: '',
  },
  {
    id: 11,
    name: 'Tharenasre A/P Balaguru',
    picture: '',
  },
  {
    id: 12,
    name: 'Jocelyn Lim Gek Shin',
    picture: '',
  },

  {
    id: 13,
    name: 'Na Yong Teck',
    picture: '',
  },
  {
    id: 14,
    name: 'Kuralmathy A/P Selvam',
    picture: '',
  },
  {
    id: 15,
    name: 'Ku Yee Fang',
    picture: '',
  },
  {
    id: 16,
    name: 'Soh Hui Ying',
    picture: '',
  },
  {
    id: 17,
    name: 'Low Hui Hui',
    picture: '',
  },
  {
    id: 18,
    name: 'Roshini Vellu',
    picture: '',
  },

  {
    id: 19,
    name: 'Muhamad Adib bin Azahar',
    picture: '',
  },
  {
    id: 20,
    name: 'Rudrayani A/P Thiruchelvam',
    picture: '',
  },
  {
    id: 21,
    name: 'Shyamalan A/L Somasuntharam',
    picture: '',
  },
  {
    id: 22,
    name: 'Suriya Kumaren A/L Anantha Kumaran',
    picture: '',
  },
  {
    id: 23,
    name: 'Kaartiga A/P Ravinran',
    picture: '',
  },
  {
    id: 24,
    name: 'Ang Yik Ching',
    picture: '',
  },
  {
    id: 25,
    name: 'Mohd Fadil Bin Ismail',
    picture: '',
  },
  {
    id: 26,
    name: 'Yap Chun Wey',
    picture: '',
  },
  {
    id: 27,
    name: 'Fabian Fernandez',
    picture: '',
  },

  {
    id: 28,
    name: 'Manoj Kumar A/L Loganathan',
    picture: '',
  },
  {
    id: 29,
    name: 'Yuvaneswaran A/L Chandramohan',
    picture: '',
  },
  {
    id: 30,
    name: 'Niranjanan A/L Seevernesveran',
    picture: '',
  },
  {
    id: 31,
    name: 'Arumugam A/L Ragaseagran',
    picture: '',
  },
  {
    id: 32,
    name: 'Yeeswaran A/L Murugan',
    picture: '',
  },

  {
    id: 33,
    name: 'Durga Devi Ravindran',
    picture: '',
  },
  {
    id: 34,
    name: 'Yasshini Priya A/P Manimaran',
    picture: '',
  },
  {
    id: 35,
    name: 'Ronalson A/L Arphutarajan',
    picture: '',
  },
  {
    id: 36,
    name: 'Shalvin A/L Kanvinchelvan',
    picture: '',
  },
  {
    id: 37,
    name: 'Aida Batrisya Binti Azli',
    picture: '',
  },
  {
    id: 38,
    name: 'Nur Fatihah Binti Ishak',
    picture: '',
  },

  {
    id: 39,
    name: 'Sri Zuraidah Binti Abdul Khaliq',
    picture: '',
  },
  {
    id: 40,
    name: 'Yeap Jia Wei',
    picture: '',
  },
  {
    id: 41,
    name: 'Muhammad Haziq Faris Bin Mohd Hafidzuddin',
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
    ajk: [3, 4, 5, 6, 7, 8, 2, 9, 10, 11],
  },
  {
    id: 4,
    title: 'Bendahari',
    ajk: [12, 13, 14, 15, 16, 17],
  },
  {
    id: 5,
    title: 'Corporate Communication',
    ajk: [18, 19, 20, 21, 22, 23, 24, 25, 26, 2, 13, 17],
  },
  {
    id: 6,
    title: 'Kem Komandan',
    ajk: [25, 27, 5, 8, 20, 22],
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
