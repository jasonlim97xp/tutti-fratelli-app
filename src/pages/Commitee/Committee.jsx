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
    picture: require('../../assets/ajk_profile/1.png'),
  },
  {
    id: 2,
    name: 'Agilan Munusamy',
    picture: require('../../assets/ajk_profile/2.png'),
  },
  {
    id: 3,
    name: 'Lim Fong Ling',
    picture: require('../../assets/ajk_profile/3.png'),
  },
  {
    id: 4,
    name: 'Ng Sue Huey',
    picture: require('../../assets/ajk_profile/4.png'),
  },
  {
    id: 20,
    name: 'Jason Lim Zhen Shen',
    picture: require('../../assets/ajk_profile/20.png'),
  },
  {
    id: 68,
    name: 'Soe Min Ming',
    picture: require('../../assets/ajk_profile/68.png'),
  },
  {
    id: 5,
    name: 'Syamir Alihan Bin Showkat Ali',
    picture: require('../../assets/ajk_profile/5.png'),
  },
  {
    id: 21,
    name: 'Firdaus Anwar Bin Mustafa',
    picture: require('../../assets/ajk_profile/21.png'),
  },
  {
    id: 26,
    name: 'Dinesgumar A/L Nagaiah',
    picture: require('../../assets/ajk_profile/26.png'),
  },
  {
    id: 6,
    name: 'Ehswarakali Sadasivam',
    picture: require('../../assets/ajk_profile/6.png'),
  },
  {
    id: 7,
    name: 'Tharenasre A/P Balaguru',
    picture: require('../../assets/ajk_profile/7.png'),
  },
  {
    id: 8,
    name: 'Jocelyn Lim Gek Shin',
    picture: require('../../assets/ajk_profile/8.png'),
  },
  {
    id: 9,
    name: 'Na Yong Teck',
    picture: require('../../assets/ajk_profile/9.png'),
  },
  {
    id: 10,
    name: 'Kuralmathy A/P Selvam',
    picture: require('../../assets/ajk_profile/10.png'),
  },
  {
    id: 11,
    name: 'Ku Yee Fang',
    picture: require('../../assets/ajk_profile/11.png'),
  },
  {
    id: 12,
    name: 'Soh Hui Ying',
    picture: require('../../assets/ajk_profile/12.png'),
  },
  {
    id: 13,
    name: 'Low Hui Hui',
    picture: require('../../assets/ajk_profile/13.png'),
  },
  {
    id: 14,
    name: 'Roshini Vellu',
    picture: require('../../assets/ajk_profile/14.png'),
  },
  {
    id: 15,
    name: 'Muhamad Adib bin Azahar',
    picture: require('../../assets/ajk_profile/15.png'),
  },
  {
    id: 22,
    name: 'Rudrayani A/P Thiruchelvam',
    picture: require('../../assets/ajk_profile/22.png'),
  },
  {
    id: 89,
    name: 'Shyamalan A/L Somasuntharam',
    picture: require('../../assets/ajk_profile/89.png'),
  },
  {
    id: 23,
    name: 'Suriya Kumaren A/L Anantha Kumaran',
    picture: require('../../assets/ajk_profile/23.png'),
  },
  {
    id: 16,
    name: 'Kaartiga A/P Ravinran',
    picture: require('../../assets/ajk_profile/16.png'),
  },
  {
    id: 18,
    name: 'Ang Yik Ching',
    picture: require('../../assets/ajk_profile/18.png'),
  },
  {
    id: 19,
    name: 'Mohd Fadil Bin Ismail',
    picture: require('../../assets/ajk_profile/19.png'),
  },
  {
    id: 67,
    name: 'Yap Chun Wey',
    picture: require('../../assets/ajk_profile/67.png'),
  },
  {
    id: 24,
    name: 'Fabian Fernandez',
    picture: require('../../assets/ajk_profile/24.png'),
  },
  {
    id: 25,
    name: 'Manoj Kumar A/L Loganathan',
    picture: require('../../assets/ajk_profile/25.png'),
  },
  {
    id: 27,
    name: 'Yuvaneswaran A/L Chandramohan',
    picture: require('../../assets/ajk_profile/27.png'),
  },
  {
    id: 28,
    name: 'Niranjanan A/L Seevernesveran',
    picture: require('../../assets/ajk_profile/28.png'),
  },
  {
    id: 29,
    name: 'Arumugam A/L Ragaseagran',
    picture: require('../../assets/ajk_profile/29.png'),
  },
  {
    id: 30,
    name: 'Yeeswaran A/L Murugan',
    picture: require('../../assets/ajk_profile/30.png'),
  },
  {
    id: 31,
    name: 'Durga Devi Ravindran',
    picture: require('../../assets/ajk_profile/31.png'),
  },
  {
    id: 32,
    name: 'Yasshini Priya A/P Manimaran',
    picture: require('../../assets/ajk_profile/32.png'),
  },
  {
    id: 33,
    name: 'Ronalson A/L Arphutarajan',
    picture: require('../../assets/ajk_profile/33.png'),
  },
  {
    id: 34,
    name: 'Shalvin A/L Kanvinchelvan',
    picture: require('../../assets/ajk_profile/34.png'),
  },
  {
    id: 35,
    name: 'Aida Batrisya Binti Azli',
    picture: require('../../assets/ajk_profile/35.png'),
  },
  {
    id: 36,
    name: 'Nur Fatihah Binti Ishak',
    picture: require('../../assets/ajk_profile/36.png'),
  },
  {
    id: 37,
    name: 'Sri Zuraidah Binti Abdul Khaliq',
    picture: require('../../assets/ajk_profile/37.png'),
  },
  {
    id: 38,
    name: 'Yeap Jia Wei',
    picture: require('../../assets/ajk_profile/38.png'),
  },
  {
    id: 39,
    name: 'Muhammad Haziq Faris Bin Mohd Hafidzuddin',
    picture: require('../../assets/ajk_profile/39.png'),
  },
  {
    id: 40,
    name: 'Hon Yeen Heng',
    picture: require('../../assets/ajk_profile/40.png'),
  },
  {
    id: 86,
    name: 'Yaasvanth Mohan',
    picture: require('../../assets/ajk_profile/86.png'),
  },
  {
    id: 41,
    name: 'Cuthbert Wong Jia Qi',
    picture: require('../../assets/ajk_profile/41.png'),
  },
  {
    id: 42,
    name: 'Shahrul Nizam Bin Mohd Shahril',
    picture: require('../../assets/ajk_profile/42.png'),
  },
  {
    id: 43,
    name: 'Na Yong Sik',
    picture: require('../../assets/ajk_profile/43.png'),
  },
  {
    id: 44,
    name: 'Shanmugapraba A/P Balaikrishnan',
    picture: require('../../assets/ajk_profile/44.png'),
  },
  {
    id: 45,
    name: 'Tan Rhu Yen',
    picture: require('../../assets/ajk_profile/45.png'),
  },
  {
    id: 46,
    name: 'Naga Durga A/P Vassu',
    picture: require('../../assets/ajk_profile/46.png'),
  },
  {
    id: 47,
    name: 'Pratheep Kumar',
    picture: require('../../assets/ajk_profile/47.png'),
  },
  {
    id: 91,
    name: 'Bishmaar Nair A/L Damotharan Nair',
    picture: require('../../assets/ajk_profile/91.png'),
  },
  {
    id: 17,
    name: 'Alice Poh Lee Yong',
    picture: require('../../assets/ajk_profile/17.png'),
  },
  {
    id: 48,
    name: 'Navanitha Muniandy',
    picture: require('../../assets/ajk_profile/48.png'),
  },
  {
    id: 49,
    name: 'Dhinagaran Naidu A/L Varatharajan',
    picture: require('../../assets/ajk_profile/49.png'),
  },
  {
    id: 50,
    name: 'Shah Lehan Bin Mat Zin',
    picture: require('../../assets/ajk_profile/50.png'),
  },
  {
    id: 51,
    name: 'Kiretharan A/L Ramachandran',
    picture: require('../../assets/ajk_profile/51.png'),
  },
  {
    id: 52,
    name: 'Dhinesh Sugumaran',
    picture: require('../../assets/ajk_profile/52.png'),
  },
  {
    id: 53,
    name: 'Padmaraaj Marudadorai',
    picture: require('../../assets/ajk_profile/53.png'),
  },
  {
    id: 54,
    name: 'Haizatul binti Ashikin',
    picture: require('../../assets/ajk_profile/54.png'),
  },
  {
    id: 55,
    name: 'Nurul Nabela Idayu Binti Husain',
    picture: require('../../assets/ajk_profile/55.png'),
  },
  {
    id: 56,
    name: 'Puteri Afiqah Balqis bt Ramlee',
    picture: require('../../assets/ajk_profile/56.png'),
  },
  {
    id: 57,
    name: 'Picaster A/L Paulraj',
    picture: require('../../assets/ajk_profile/57.png'),
  },
  {
    id: 58,
    name: 'Yap Pei Jun',
    picture: require('../../assets/ajk_profile/58.png'),
  },
  {
    id: 59,
    name: 'Nur Madinah Binti Norhisham',
    picture: require('../../assets/ajk_profile/59.png'),
  },
  {
    id: 60,
    name: 'Haridas Kanasan',
    picture: require('../../assets/ajk_profile/60.png'),
  },
  {
    id: 61,
    name: 'Mohamad Nazrul Ameen Bin Mohamad Nazri',
    picture: require('../../assets/ajk_profile/61.png'),
  },
  {
    id: 62,
    name: 'Lee Kenny',
    picture: require('../../assets/ajk_profile/62.png'),
  },
  {
    id: 63,
    name: 'Chew Chyi Ming',
    picture: require('../../assets/ajk_profile/63.png'),
  },
  {
    id: 64,
    name: 'Yuvaraj Darman',
    picture: require('../../assets/ajk_profile/64.png'),
  },
  {
    id: 65,
    name: 'Muhammad Islah Syah Bin Mohd Shah',
    picture: require('../../assets/ajk_profile/65.png'),
  },
  {
    id: 66,
    name: 'Muhammad Thamir Afkar Bin Azhar',
    picture: require('../../assets/ajk_profile/66.png'),
  },
  {
    id: 69,
    name: 'See Li Zhi',
    picture: require('../../assets/ajk_profile/69.png'),
  },
  {
    id: 71,
    name: 'Miko Leong Miu Zee',
    picture: require('../../assets/ajk_profile/71.png'),
  },
  {
    id: 70,
    name: 'Deeptii a/p Kannan',
    picture: require('../../assets/ajk_profile/70.png'),
  },
  {
    id: 72,
    name: 'Thuvaaritha A/P Sivarajah',
    picture: require('../../assets/ajk_profile/72.png'),
  },
  {
    id: 73,
    name: 'Parishana A/P Nadarajan',
    picture: require('../../assets/ajk_profile/73.png'),
  },
  {
    id: 74,
    name: 'Yew Shu Wen',
    picture: require('../../assets/ajk_profile/74.png'),
  },
  {
    id: 75,
    name: 'Thariny Ramadas',
    picture: require('../../assets/ajk_profile/75.png'),
  },
  {
    id: 76,
    name: 'Nur Dania Sufiah Binti Azrizal',
    picture: require('../../assets/ajk_profile/76.png'),
  },
  {
    id: 77,
    name: 'Navavehllan A/L Mohananathan',
    picture: require('../../assets/ajk_profile/77.png'),
  },
  {
    id: 78,
    name: 'Yow Chuan Leet',
    picture: require('../../assets/ajk_profile/78.png'),
  },
  {
    id: 79,
    name: 'Stephen Vethan Chandrasekr',
    picture: require('../../assets/ajk_profile/79.png'),
  },
  {
    id: 80,
    name: 'Calvin Lai Chong Tat',
    picture: require('../../assets/ajk_profile/80.png'),
  },
  {
    id: 81,
    name: 'Betty Yew Hui Qin',
    picture: require('../../assets/ajk_profile/81.png'),
  },
  {
    id: 82,
    name: 'Muhamad Irfan Bin Maszuki',
    picture: require('../../assets/ajk_profile/82.png'),
  },
  {
    id: 83,
    name: 'Muhammad Nurfadhli Bin Mohd. Nazeri',
    picture: require('../../assets/ajk_profile/83.png'),
  },
  {
    id: 84,
    name: 'Fatin Nabila Azra’i @ Azry',
    picture: require('../../assets/ajk_profile/84.png'),
  },
  {
    id: 85,
    name: 'Ann Lim Sher Ling',
    picture: require('../../assets/ajk_profile/85.png'),
  },
  {
    id: 86,
    name: 'Yaasvanth Mohan',
    picture: require('../../assets/ajk_profile/86.png'),
  },
  {
    id: 87,
    name: 'Seishaa ShivanniI A/P Ravi',
    picture: require('../../assets/ajk_profile/87.png'),
  },
  {
    id: 88,
    name: 'Sanjna A/P Kannan',
    picture: require('../../assets/ajk_profile/88.png'),
  },
  {
    id: 90,
    name: 'Joshua Vinod Balakrishnan',
    picture: require('../../assets/ajk_profile/90.png'),
  },
  {
    id: 92,
    name: 'Laakshita A/P Kavi Maran',
    picture: require('../../assets/ajk_profile/92.png'),
  },
  {
    id: 93,
    name: 'Kreeshwara A/L Devarajoo',
    picture: require('../../assets/ajk_profile/93.png'),
  },
  {
    id: 94,
    name: 'Visnuprya A/P Ganesh',
    picture: require('../../assets/ajk_profile/94.png'),
  },
  {
    id: 95,
    name: 'Dhavitraa Chandran',
    picture: require('../../assets/ajk_profile/95.png'),
  },
  {
    id: 96,
    name: 'Nur Haswani Binti Ahamd Ariffin',
    picture: require('../../assets/ajk_profile/96.png'),
  },
  {
    id: 97,
    name: 'Parvathan A/L Vijaya Kumar',
    picture: require('../../assets/ajk_profile/97.png'),
  },
  {
    id: 98,
    name: 'Lavenesh A/L Ravi',
    picture: require('../../assets/ajk_profile/98.png'),
  },

  {
    id: 99,
    name: 'Nurul Iman Tee Bt Mohd Afiq Tee',
    picture: require('../../assets/ajk_profile/99.png'),
  },
  {
    id: 100,
    name: 'Muhammad Daniel Dzaquan Bin Mohd Amzari',
    picture: require('../../assets/ajk_profile/100.png'),
  },
  {
    id: 101,
    name: 'Yogapirabu A/L Selvaraj',
    picture: require('../../assets/ajk_profile/101.png'),
  },
  {
    id: 102,
    name: 'Farah Aida Bt. Dahalan',
    picture: require('../../assets/ajk_profile/102.png'),
  },
  {
    id: 103,
    name: 'Maheswaran A/L Sugumaran',
    picture: require('../../assets/ajk_profile/103.png'),
  },
  {
    id: 104,
    name: 'Subangkar A/L S.Shanmuga Jeyshoorian',
    picture: require('../../assets/ajk_profile/104.png'),
  },
  {
    id: 105,
    name: 'Vivek A/L Appalanaidu',
    picture: require('../../assets/ajk_profile/105.png'),
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
    ajk: [3, 4, 20, 68, 5, 6, 7, 2, 26, 21],
  },
  {
    id: 4,
    title: 'Bendahari',
    ajk: [8, 9, 10, 11, 12, 13],
  },
  {
    id: 5,
    title: 'Corporate Communication',
    ajk: [14, 15, 22, 89, 23, 2, 17, 18, 16, 19, 9, 13, 67],
  },
  {
    id: 6,
    title: 'Kem Komandan',
    ajk: [19, 24, 20, 21, 22, 23],
  },

  {
    id: 7,
    title: 'Latihan & Disiplin',
    ajk: [
      2, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 23, 21, 36, 37, 38, 39,
    ],
  },
  {
    id: 8,
    title: 'Sosial & Kebudayaan',
    ajk: [40, 86, 41, 42, 43, 44, 45, 46],
  },
  {
    id: 9,
    title: 'Kuartermaster',
    ajk: [47, 48, 49, 50, 51, 52, 53, 54, 91, 17, 5, 55, 56, 57, 58, 59],
  },
  {
    id: 10,
    title: 'Aset',
    ajk: [60, 61, 62, 63, 49, 64, 65, 66, 67],
  },
  {
    id: 11,
    title: 'Pemarkahan',
    ajk: [68, 12, 9, 20, 54, 69, 70, 71, 72, 73, 74, 75, 76, 77],
  },
  {
    id: 12,
    title: 'Fotography, Videography & Multimedia',
    ajk: [78, 79, 80, 81, 82, 83, 84, 85],
  },
  {
    id: 13,
    title: 'PR & Media',
    ajk: [86, 87, 88, 32, 11, 84],
  },
  {
    id: 14,
    title: 'KKK',
    ajk: [89, 2, 26, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  },
  {
    id: 15,
    title: 'ITU',
    ajk: [101, 102, 103, 104, 105],
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
                        source={member.picture}
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
