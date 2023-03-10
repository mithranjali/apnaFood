/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Screens/SignIn';
import OtpScreen from '../Screens/OtpScreen';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';
import Screen5 from '../Screens/Screen5';
import VendorStatus from '../Screens/VendorStatus';
import Cheader from '../Components/Cheader';


const Stack = createNativeStackNavigator();

export default function VendorRegistration() {
  return (
    // <NavigationContainer>
      <Stack.Navigator animationEnabled={false} initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VendorStatus"
          component={VendorStatus}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{
            headerShown: true,
            headerTitle: () => <Cheader active_step={0} />,
            headerStyle: {
              height: 100,
            },
          }}
        />
        <Stack.Screen
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
      </Stack.Navigator>
    /* </NavigationContainer> */
  );

}
