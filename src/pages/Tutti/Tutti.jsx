import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const Tutti = ({navigation}) => {
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
            Group 43: Tutti Fratelli
          </Text>
        </Div>

        <Div style={{marginTop: 20, paddingHorizontal: '8%'}}>
          <View style={styles.scoreboardContainer}>
            <Text>Hello</Text>
          </View>
        </Div>

        <Div alignItems="center" style={{marginVertical: 20}}>
          <Text fontSize="4xl" style={styles.title}>
            Actions
          </Text>
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

export default Tutti;
