import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import VendorRegistration from './Navigation/VendorRegistration';
import Subdistrict from './Navigation/Subdistrict';

export default function App() {
  return <VendorRegistration />;
  // return <Subdistrict />;
  // return (
  //   <View style={styles.Container}>
  //     {/* <Text
  //       style={styles.heading1}
  //       >Review</Text> */}
  //     <View style={styles.menu_container}>
  //       <Text style={styles.heading1}>Review</Text>
  //       <TouchableOpacity style={styles.box1}>
  //         <Text style={styles.heading2}>Food</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.box2}>
  //         <Text style={styles.heading2}>Vendor</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.box3}>
  //         <Text style={styles.heading2}>Delivery Partners</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6%',
    backgroundColor: '#f5f5f5',
    // backgroundColor:'red',
  },
  heading1: {
    // alignSelf:'flex-start',
    color: '#8399cf',
    fontSize: 24,
    // fontWeight:'700',
    marginBottom: '5%',
    alignSelf: 'flex-start',
    fontFamily: 'didactgothic-regular',
  },
  heading2: {
    color: '#f5f5f5',
    fontSize: 27,
    alignSelf: 'flex-start',
    fontFamily: 'didactgothic-regular',
  },
  menu_container: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    // backgroundColor:'blue'
  },
  box1: {
    // flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '7%',
    margin: '3%',
    height: 150,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f58551',
  },
  box2: {
    // flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6%',
    margin: '3%',
    height: 150,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f7b93d',
  },
  box3: {
    // flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6%',
    margin: '3%',
    height: 150,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#8ec63e',
  },
  icon1: {
    alignSelf: 'flex-end',
    height: 80,
    width: 80,
    // justifySelf:'flex-start',
  },
  icon2: {
    alignSelf: 'flex-end',
    height: 80,
    width: 80,
    // justifySelf:'flex-start',
  },
  icon3: {
    alignSelf: 'flex-end',
    height: 80,
    width: 90,
    // justifySelf:'flex-start',
  },
});
