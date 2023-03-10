/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Subdistrict from './Navigation/Subdistrict';
import VendorRegistration from './Navigation/VendorRegistration';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator animationEnabled={false} initialRouteName="Vendor">
        <Stack.Screen
          name="Vendor"
          component={VendorRegistration}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Subdistrict"
          component={Subdistrict}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
