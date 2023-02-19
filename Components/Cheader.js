/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ProgressStep,ProgressSteps } from 'react-native-progress-steps';

export default function Cheader({active_step}) {
  return (
    <View style={styles.container}>
    <ProgressSteps
    activeStep = {active_step}
    >
    <ProgressStep
    style={styles.step}
    removeBtnRow={true}
    label="Step 1">
      <View>
        {/* <Text>Step 1 content</Text> */}
      </View>
    </ProgressStep>
    <ProgressStep
    style={styles.step}
    removeBtnRow={true}
    label="Step 2">
      <View>
        {/* <Text>Step 2 content</Text> */}
      </View>
    </ProgressStep>
    <ProgressStep
    style={styles.step}
    removeBtnRow={true}
    label="Step 3">
      <View>
        {/* <Text>Step 3 content</Text> */}
      </View>
    </ProgressStep>
    <ProgressStep
    style={styles.step}
    removeBtnRow={true}
    label="Step 4">
      <View>
        {/* <Text>Step 3 content</Text> */}
      </View>
    </ProgressStep>
  </ProgressSteps>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    // position: 'absoute',
    // // justifyContent:'space-between',
    // alignItems:'center',
    // height:100,
    // flexDirection:'row',
    // // justifyContent:'space-around',
    // justifyContent:'space-around',
    width:"80%",
    // backgroundColor:'blue',


  },
});
