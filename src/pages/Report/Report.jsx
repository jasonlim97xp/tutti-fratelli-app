import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import {Div, Text, Image} from 'react-native-magnus';

const DaySelection = ({i, triggerPress}) => {
  return (
    <TouchableOpacity
      style={{marginBottom: 20}}
      onPress={() => triggerPress(i)}>
      <Div style={{backgroundColor: 'rgba(128, 128, 128, 0.5)', padding: 20}}>
        <Text fontSize="2xl" fontWeight="bold">
          Kem Tutti Fratelli Day {i}
        </Text>
        <Text style={{fontStyle: 'italic'}}>To be released!</Text>
      </Div>
    </TouchableOpacity>
  );
};

const Report = ({navigation}) => {
  const triggerNavigate = () => {
    navigation.navigate('InputReportPage');
  };

  const ModuleListItem1 = () => {
    return (
      <TouchableOpacity onPress={triggerNavigate}>
        <Div style={{backgroundColor: 'white', padding: 20}}>
          <Text fontSize="2xl" fontWeight="bold">
            Sample
          </Text>
          <Text style={{fontStyle: 'italic'}}>Report Submitted!</Text>
        </Div>
      </TouchableOpacity>
    );
  };

  const renderDaySelections = () => {
    const iterations = 4;
    const daySelections = [];

    for (let i = 1; i <= iterations; i++) {
      daySelections.push(
        <DaySelection key={i} i={i} triggerPress={() => ({})} />,
      );
    }

    return daySelections;
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: '#211134', minHeight: '100%', paddingTop: 20}}>
        <Div alignItems="center" style={{gap: 10}}>
          <Image
            h={100}
            w={100}
            m={10}
            rounded="circle"
            source={require('../../assets/ktf_logo.webp')}
          />

          <Text fontSize="4xl" style={styles.title}>
            Feedback from {'\n'}Squad 25: Tutti Fratelli
          </Text>
        </Div>

        <Div style={{marginTop: 20, paddingHorizontal: '8%'}}>
          <ModuleListItem1 />
          <Div height={20} />
          {renderDaySelections()}
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
  scoreboardContainer: {
    minHeight: '70%',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'rgba(111, 90, 136, 0.5)',
  },
});

export default Report;
