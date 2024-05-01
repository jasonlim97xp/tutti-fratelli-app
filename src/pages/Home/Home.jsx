import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#211134', minHeight: '100%'}}>
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
});

export default Home;
