import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

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

const Score = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: '#211134', minHeight: '100%', paddingTop: 20}}>
        <Div flexDir="row" alignItems="center" justifyContent="center">
          <Image
            h={80}
            w={80}
            m={10}
            rounded="circle"
            source={require('../../assets/ktf_logo.webp')}
          />

          <Text fontSize="4xl" style={styles.title}>
            Tutti Scoreboard
          </Text>
        </Div>

        <Div style={{marginTop: 20, paddingHorizontal: '8%'}}>
          <View style={styles.scoreboardContainer}>
            <Text>Hello</Text>
          </View>
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
  },
  scoreboardContainer: {
    minHeight: 100,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 5,
    backgroundColor: 'rgba(111, 90, 136, 0.5)',
  },
});

export default Score;
