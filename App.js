import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './Screens/SignIn';
import OtpScreen from './Screens/OtpScreen';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import Screen5 from './Screens/Screen5';
import Cheader from './Components/Cheader';


const Stack = createNativeStackNavigator();

// import React from 'react'

export default function App() {
  return (
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
            headerTitle: () => <Cheader active_step={0} />,
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
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe9f0',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:'14%'
  },
});
