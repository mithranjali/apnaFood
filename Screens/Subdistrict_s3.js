/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react';
import { Text, View, divider, TextInput,Image, TouchableOpacity, KeyboardAvoidingView, u, Alert, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';


const Subdistrict_s3 = ({navigation}) => {
  return (
    <View style={styles.Container}>
        <Text
        style={styles.headingmain}
        >User Details</Text>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.menu_container}>
        <Text
        style={styles.heading1}
        >General Details</Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Name :</Text> Rahul </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Email :</Text> abc@gmail.com </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Phone :</Text> 99999999xxxx </Text>
        <View style={styles.line} />
        <Text
        style={styles.heading1}
        >Bank Details</Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Bank Account Number :</Text> 1234 4567 8900 </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Bank Account Name :</Text> M Rahul Ramakrishna </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Bank IFSC Number :</Text> HDFC0000xxx </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >UPI :</Text> OKHDFC@ybl</Text>
        <View style={styles.line} />
        <Text
        style={styles.heading1}
        >Location Details</Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Country :</Text> India </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >State :</Text> Telangana </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >District :</Text> Hyderabad </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Subdistrict :</Text> Malkajgiri </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Address :</Text> P177, R55, Enclave, SEC-BAD </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >Pincode :</Text> 500070 </Text>
        <View style={styles.line} />
        <Text
        style={styles.heading1}
        >Organization Details</Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >CIN :</Text> 123456789 </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >PAN :</Text> 123456789 </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >GST :</Text> 123456789 </Text>
        <Text style={styles.attribute}> <Text style={styles.heading2} >UDYAM :</Text> 123456789 </Text>
        <View style={styles.line} />
        </View>
        </ScrollView>
        <View style={styles.buttons_container}>
        <TouchableOpacity>
            <View style={styles.button1}>
                <Text>APPROVE</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.button2}>
                <Text>REJECT</Text>
            </View>
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
        backgroundColor:'#f5f5f5'
        // backgroundColor:'red',
    },
    buttons_container:{
        // backgroundColor:'red',
        width:'90%',
        margin:'2%',
        flexDirection: 'row',
        // alignItems:'',
        alignContent:'space-between',
        justifyContent: 'space-around',
    },
    button1:{
        backgroundColor:'#8EC63E',
        // padding:'12%',
        width:140,
        alignItems:'center',
        height:50,
        paddingHorizontal:'16%',
        justifyContent: 'center',
        borderRadius:16,
    },
    button2:{
        backgroundColor:'#F58551',
        // padding:'12%',
        width:140,
        height:50,
        paddingHorizontal:'16%',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:16,
    },
    headingmain:{
        fontSize:28,
        color:'#8399cf',
        // padding:8,
        fontWeight:'700',
        alignSelf:'flex-start',
        margin:'5%',
    },
    heading1:{
        // alignSelf:'flex-start',
        color:'black',
        fontSize:20,
        fontWeight:'500',
        marginBottom:'5%',
        alignSelf: 'flex-start',
    },
    heading2:{
        // color:'#f5f5f5',
        fontSize:16,
        color:'black',
        marginVertical:'2%',
    },
    attribute:{
        fontSize:16,
        marginVertical:'2%',
    },
    menu_container:{
        flex:1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
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
        borderRadius:20,
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
        borderRadius:20,
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
        borderRadius:20,
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
    },
    line:{
        margin:'6%',
        borderBottomColor:'black',
        borderBottomWidth:StyleSheet.hairlineWidth
    }
});

export default Subdistrict_s3;
