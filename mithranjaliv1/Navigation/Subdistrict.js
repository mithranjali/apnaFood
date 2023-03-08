/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import Subdistrict_s1 from '../Screens/Subdistrict_s1';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VendorNavigation from '../Screens/VendorNavigation';

const Tab = createBottomTabNavigator();


export default function Subdistrict() {
  return (
    // Navigation for Subdistrict
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={VendorNavigation}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Not Home 1"
          component={Subdistrict_s1}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Not Home 2"
          component={Subdistrict_s1}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Not Home 3"
          component={Subdistrict_s1}
        />
      </Tab.Navigator>
  );
}
