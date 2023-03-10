/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react';
import { Text, View, TextInput,Image, TouchableOpacity, KeyboardAvoidingView, u, Alert } from 'react-native';
import { StyleSheet } from 'react-native';


const VendorStatus = ({navigation, route}) => {

    const data = route.params;
  return (
    <View style={styles.Container}>
        {/* <Text
        style={styles.heading1}
        >Review</Text> */}
        <View
        style={styles.menu_container}
        >
        <Text
        style={styles.heading1}
        >Status</Text>
            <TouchableOpacity
            style={styles.box3}
            >
            <View>
            <Text style={styles.heading2} >User : {data.email}</Text>
            <Text style={styles.heading2}>Status : District </Text>
            </View>
            <Image style={styles.icon2} source={require('../Restaurant_Icon_nobg.png')} />
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

    Container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:'6%',
        backgroundColor:'#f5f5f5',
        // backgroundColor:'red',
    },
    heading1:{
        // alignSelf:'flex-start',
        color:'#8399cf',
        fontSize:24,
        // fontWeight:'700',
        marginBottom:'5%',
        alignSelf: 'flex-start',
        fontFamily:'didactgothic-regular',
    },
    heading2:{
        color:'#f5f5f5',
        fontSize:20,
        alignSelf: 'flex-start',
        fontFamily:'didactgothic-regular',
    },
    menu_container:{
        flex:1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        padding:20,
        width:'100%',
        // backgroundColor:'blue'
    },
    box1:{
        // flex:1,
        justifyContent:'space-between',
        alignItems: 'center',
        padding:'7%',
        margin:'3%',
        height:160,
        width:'100%',
        borderRadius:10,
        backgroundColor:'#f58551',
    },
    box2:{
        // flex:1,
        justifyContent:'space-between',
        alignItems: 'center',
        padding:'6%',
        margin:'3%',
        // height:150,
        // width:'100%',
        borderRadius:10,
        backgroundColor:'#f7b93d',
    },
    box3:{
        // flex:1,
        justifyContent:'space-between',
        alignItems: 'center',
        padding:'6%',
        margin:'3%',
        height:180,
        width:'100%',
        borderRadius:10,
        backgroundColor:'#8ec63e',
    },
    icon1:{
        alignSelf:'flex-end',
        height:80,
        width:80,
        // justifySelf:'flex-start',
    },
    icon2:{
        alignSelf:'flex-end',
        height:80,
        width:80,
    },
    icon3:{
        alignSelf:'flex-end',
        height:80,
        width:90,
        // justifySelf:'flex-start',
    },

});

export default VendorStatus;
