import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import Score from '../pages/Score/Score';
import Tutti from '../pages/Tutti/Tutti';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tutti" component={Tutti} />
        <Tab.Screen name="Score" component={Score} />
      </Tab.Navigator>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            fontWeight: '700',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNav;
