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

        <Image
          minH={300}
          minW={400}
          maxW={screenWidth}
          resizeMethod="contain"
          source={require('../../../assets/content/teamstructure.png')}
        />

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
});

export default TeamStructure;
