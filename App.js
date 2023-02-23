import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './Screens/SignIn';
import OtpScreen from './Screens/OtpScreen';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Screen5 from './Screens/Screen5';
import Cheader from './Components/Cheader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Subdistrict_s1 from './Screens/Subdistrict_s1';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VendorNavigation from './Screens/VendorNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// import React from 'react'

export default function App() {
  return (

    // Navigation for Subdistrict
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen
    //       options={{
    //         headerShown: false,
    //       }}
    //       name="Home"
    //       component={VendorNavigation}
    //     />
    //     <Tab.Screen
    //       options={{
    //         headerShown: false,
    //       }}
    //       name="Not Home 1"
    //       component={Subdistrict_s1}
    //     />
    //     <Tab.Screen
    //       options={{
    //         headerShown: false,
    //       }}
    //       name="Not Home 2"
    //       component={Subdistrict_s1}
    //     />
    //     <Tab.Screen
    //       options={{
    //         headerShown: false,
    //       }}
    //       name="Not Home 3"
    //       component={Subdistrict_s1}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator animationEnabled={false} initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          // eslint-disable-next-line prettier/prettier
          name="OtpScreen"
          component={OtpScreen}
          options={{
            headerShown: true,
            // headerTitle: () => <Cheader active_step={0} />,
            headerStyle: {
              height: 100,
            },
          }}
        />
        <Stack.Screen
          // eslint-disable-next-line prettier/prettier
          name="Screenthree"
          component={Screen3}
          options={{
            headerShown: true,
            headerTitle: () => <Cheader active_step={1} />,
            headerStyle: {
              height: 100,
            },
          }}
        />
        <Stack.Screen
          // eslint-disable-next-line prettier/prettier
          name="Screen4"
          component={Screen4}
          options={{
            headerShown: true,
            headerTitle: () => <Cheader active_step={2} />,
            headerStyle: {
              height: 100,
            },
          }}
        />
        <Stack.Screen
          // eslint-disable-next-line prettier/prettier
          name="Screen5"
          component={Screen5}
          options={{
            headerShown: true,
            headerTitle: () => <Cheader active_step={3} />,
            headerStyle: {
              height: 100,
            },
          }}
        />
        <Stack.Screen
          name="Subdistrict_s1"
          component={Subdistrict_s1}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


