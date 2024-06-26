/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider} from 'react-native-magnus';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home/Home';
import Report from '../pages/Report/Report';
import InputReport from '../pages/Report/InputReport';
import Committee from '../pages/Commitee/Committee';
import History from '../pages/Home/Content/History';
import TeamStructure from '../pages/Home/Content/TeamStructure';
import Info from '../pages/Home/Content/Info';
import Map from '../pages/Home/Content/Map';
import Safety from '../pages/Home/Content/Safety';
import RiderTutti from '../pages/Home/Content/Rider';
import Awards from '../pages/Home/Content/Awards';
import LaguTema from '../pages/Home/Content/LaguTema';
import Kuartermaster from '../pages/Home/Content/Roles/Kuartermaster';
import LaguBSMM from '../pages/Home/Content/Lagu';
import IkrarBSMM from '../pages/Home/Content/Ikrar';
import FirstAidSkill from '../pages/Home/Content/FirstAidSkill';
import ThingsToBring from '../pages/Home/Content/ThingsToBring';
import KKK from '../pages/Home/Content/Roles/KKK';
import SosialRelay from '../pages/Home/Content/Competition/SosialRelay';
import Ketua from '../pages/Home/Content/Roles/Ketua';
import Kebudayaan from '../pages/Home/Content/Roles/Kebudayaan';
import IT from '../pages/Home/Content/Roles/IT';
import Penolong from '../pages/Home/Content/Roles/Penolong';
import Setiausaha from '../pages/Home/Content/Roles/Setiausaha';
import FirstAidRelay from '../pages/Home/Content/Competition/FirstAidRelay';
import Taklimat2 from '../pages/Home/Content/Taklimat2';
import AnakAngkat from '../pages/Home/Content/AnakAngkat';

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
      <Stack.Screen
        name="Taklimat2"
        component={Taklimat2}
        options={{headerTitle: 'Taklimat 2 Preparation'}}
      />
      <Stack.Screen
        name="TeamStructure"
        component={TeamStructure}
        options={{headerTitle: 'Struktur Skuad'}}
      />
      <Stack.Screen
        name="AnakAngkat"
        component={AnakAngkat}
        options={{headerTitle: 'Anak Angkat Skuad'}}
      />
      {/* Taklimat 2 Preparation */}
      <Stack.Screen
        name="RiderTutti"
        component={RiderTutti}
        options={{headerTitle: 'Rider Tutti'}}
      />
      <Stack.Screen name="Awards" component={Awards} />
      <Stack.Screen
        name="LaguTema"
        component={LaguTema}
        options={{headerTitle: 'Lagu Tema'}}
      />
      {/* Line 3 */}
      <Stack.Screen
        name="ThingsToBring"
        component={ThingsToBring}
        options={{headerTitle: 'Things To Bring'}}
      />
      <Stack.Screen
        name="LaguBSMM"
        component={LaguBSMM}
        options={{headerTitle: 'Lagu BSMM'}}
      />
      <Stack.Screen
        name="IkrarBSMM"
        component={IkrarBSMM}
        options={{headerTitle: 'Ikrar BSMM'}}
      />
      <Stack.Screen
        name="FirstAidSkill"
        component={FirstAidSkill}
        options={{headerTitle: 'Basic First Aid Skill'}}
      />
      {/* Line 4 */}
      <Stack.Screen name="Ketua" component={Ketua} />
      <Stack.Screen
        name="Penolong"
        component={Penolong}
        options={{headerTitle: 'Penolong Ketua'}}
      />
      <Stack.Screen name="Setiausaha" component={Setiausaha} />
      <Stack.Screen name="Kuartermaster" component={Kuartermaster} />
      <Stack.Screen name="Kebudayaan" component={Kebudayaan} />

      <Stack.Screen
        name="IT"
        component={IT}
        options={{headerTitle: 'IT & Sosial Media'}}
      />
      <Stack.Screen name="KKK" component={KKK} />

      {/* Line 5 */}
      <Stack.Screen
        name="FirstAidRelay"
        component={FirstAidRelay}
        options={{headerTitle: 'First Aid Relay'}}
      />
      <Stack.Screen
        name="SosialRelay"
        component={SosialRelay}
        options={{headerTitle: 'Sosial Relay'}}
      />
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
            tabBarStyle: {
              height: 70,
              paddingBottom: 10, // Adjust the padding as per your requirement
            },
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
