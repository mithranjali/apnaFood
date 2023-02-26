/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Subdistrict_s1 from './Subdistrict_s1';
import Subdistrict_s2 from './Subdistrict_s2';
import Subdistrict_s3 from './Subdistrict_s3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import VendorNavigation from './Screens/VendorNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function VendorNavigation() {
  return (
      <Stack.Navigator animationEnabled={false} initialRouteName="SubdistrictHome">
        <Stack.Screen
          // eslint-disable-next-line prettier/prettier
          name="Subdistrict_s1"
          component={Subdistrict_s1}
          options={{
            tabBarLabel:"Home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          // eslint-disable-next-line prettier/prettier
          name="Subdistrict_s2"
          component={Subdistrict_s2}
          options={{
            tabBarLabel:"Home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          // eslint-disable-next-line prettier/prettier
          name="Subdistrict_s3"
          component={Subdistrict_s3}
          options={{
            tabBarLabel:"Home",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  );
}
