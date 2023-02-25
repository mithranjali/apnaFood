/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react';
import { Text, View, TextInput,Image, TouchableOpacity, KeyboardAvoidingView, u, Alert } from 'react-native';
import { StyleSheet } from 'react-native';


const Subdistrict_s2 = ({navigation}) => {
  return (
    <View style={styles.Container}>
        <View
        style={styles.menu_container}
        >
        <Text
        style={styles.heading1}
        >Vendors</Text>
            <TouchableOpacity
            onPress={() =>{
                navigation.navigate('Subdistrict_s3')
            }}
            style={styles.box2}
            >
            <Text
            style={styles.heading2}
            >Vendor 1</Text>
            <Text
            style={styles.innner_text}
            >Name : Rahul</Text>
            <Text
            style={styles.innner_text}
            >Phone : 8019692599</Text>
            <Text
            style={styles.innner_text}
            >Email : abc@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.box1}
            >
            <Text
            style={styles.heading2}
            >Vendor 2</Text>
            <Text
            style={styles.innner_text}
            >Name : Zahid</Text>
            <Text
            style={styles.innner_text}
            >Phone : 9502908159</Text>
            <Text
            style={styles.innner_text}
            >Email : zahid17@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.box3}
            >
            <Text
            style={styles.heading2}
            >Vendor 2</Text>
            <Text
            style={styles.innner_text}
            >Name : Zahid</Text>
            <Text
            style={styles.innner_text}
            >Phone : 9502908159</Text>
            <Text
            style={styles.innner_text}
            >Email : zahid17@gmail.com</Text>
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
        padding:'8%',
        backgroundColor:'#f5f5f5'
        // backgroundColor:'red',
    },
    heading1:{
        // alignSelf:'flex-start',
        color:'black',
        fontSize:24,
        fontWeight:'700',
        marginBottom:'5%',
        alignSelf: 'flex-start',
    },
    heading2:{
        color:'#f5f5f5',
        fontSize:20,
        marginBottom:'4%',
        alignSelf: 'flex-start',
    },
    menu_container:{
        flex:1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        height:'90%',
        width:'90%',
        // backgroundColor:'blue'
    },
    box1:{
        // flex:1,
        // justifyContent:'space-between',
        // alignItems: 'center',
        padding:'7%',
        margin:'3%',
        height:150,
        width:'100%',
        borderRadius:10,
        backgroundColor:'#f58551',
    },
    box2:{
        // flex:1,
        // justifyContent:'space-between',
        // alignItems: 'center',
        padding:'7%',
        margin:'3%',
        height:150,
        width:'100%',
        borderRadius:10,
        backgroundColor:'#f7b93d',
    },
    box3:{
        // flex:1,
        // justifyContent:'space-between',
        // alignItems: 'center',
        padding:'6%',
        margin:'3%',
        height:150,
        width:'100%',
        borderRadius:10,
        backgroundColor:'#8ec63e',
    },
    icon1:{
        alignSelf:'flex-end',
        height:90,
        width:120,
        // justifySelf:'flex-start',
    },
    icon2:{
        alignSelf:'flex-end',
        height:90,
        width:120,
        // justifySelf:'flex-start',
    },
    icon3:{
        alignSelf:'flex-end',
        height:90,
        width:115,
        // justifySelf:'flex-start',
    },
    innner_text:{
    color:'black',
    }
});

export default Subdistrict_s2;
