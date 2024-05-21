import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Div, Text, Image, Icon, Button} from 'react-native-magnus';

const InputReport = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [rating, setRating] = useState(0);

  const handleRating = selectedRating => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
      starIcons.push(
        <TouchableOpacity
          key={i}
          style={{marginRight: 20}}
          onPress={() => handleRating(i)}>
          <Icon
            name={rating >= i ? 'star' : 'staro'}
            fontSize="6xl"
            color="#FFD700"
          />
        </TouchableOpacity>,
      );
    }

    return starIcons;
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
        </Div>

        <Div style={{marginTop: 20, paddingHorizontal: '8%'}}>
          <View style={styles.scoreboardContainer}>
            <Text fontSize="4xl" style={styles.title}>
              Sample
            </Text>

            <Div style={{height: 20}} />

            <View style={styles.inputContainer}>
              <Text style={styles.header}>Rate the module:</Text>
              <Div flexDir="row">{renderStars()}</Div>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.header}>Favourite Checkpoint:</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Type here..."
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.header}>Feedback:</Text>
              <TextInput
                editable
                multiline
                numberOfLines={10}
                onChangeText={text => onChangeText(text)}
                value={text}
                style={{backgroundColor: 'white'}}
              />
            </View>

            <Div row alignSelf="center" mt="lg">
              <Button
                mt="lg"
                ml="lg"
                px="xl"
                py="lg"
                bg="blue500"
                color="white"
                underlayColor="blue600">
                Submit Report
              </Button>
            </Div>
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
    textAlign: 'center',
  },
  scoreboardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: 'rgba(111, 90, 136, 0.5)',
  },
  inputContainer: {
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default InputReport;
