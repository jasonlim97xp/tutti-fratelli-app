/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider} from 'react-native-magnus';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home/Home';
import Score from '../pages/Score/Score';
import Report from '../pages/Report/Report';
import InputReport from '../pages/Report/InputReport';
import Content from '../pages/Home/Content';
import Committee from '../pages/Commitee/Committee';
import History from '../pages/Home/Content/History';
import TeamStructure from '../pages/Home/Content/TeamStructure';
import Info from '../pages/Home/Content/Info';
import Map from '../pages/Home/Content/Map';
import Safety from '../pages/Home/Content/Safety';
import RiderTutti from '../pages/Home/Content/Rider';
import Awards from '../pages/Home/Content/Awards';
import LaguTema from '../pages/Home/Content/LaguTema';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Medium',
          fontWeight: '700',
        },
      }}>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Safety" component={Safety} />
      {/* Line 2 */}
      <Stack.Screen name="TeamStructure" component={TeamStructure} />
      {/* Taklimat 2 Preparation */}
      <Stack.Screen name="RiderTutti" component={RiderTutti} />
      <Stack.Screen name="Awards" component={Awards} />
      <Stack.Screen name="LaguTema" component={LaguTema} />
    </Stack.Navigator>
  );
};

const ReportStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Medium',
          fontWeight: '700',
        },
      }}>
      <Stack.Screen
        name="ReportPage"
        component={Report}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputReportPage"
        component={InputReport}
        options={{headerTitle: 'Sample Report'}}
      />
    </Stack.Navigator>
  );
};

const AppNav = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Commitee') {
                iconName = focused ? 'people-circle' : 'people-circle-outline';
              } else if (route.name === 'Report') {
                iconName = focused ? 'document-text' : 'document-text-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Commitee" component={Committee} />
          <Tab.Screen name="Report" component={ReportStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNav;
