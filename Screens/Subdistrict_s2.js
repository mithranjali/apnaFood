/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput,Image, TouchableOpacity, KeyboardAvoidingView, u, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Subdistrict_s2 = ({navigation}) => {

    // const [vendor_details, set_vendor_details] = useState([]);

    const vendor_details = [
        {
            '_id': '63f74b1909783f15d01ce490',
            'username': 'sripriya',
            'email': 'sripriyamaturi8@gmail.com',
            'mobile': '919701044584',
            'password': 'abcd',
            'Organization Details': {
                'type_of_oraganisation': 'xyz',
                'cin': '1234',
                'pan': 'ewj2',
                'gst': '3ndj',
                'udhyam': 'ehjj',
            },
            'Bank Details': {
                'bank_account_number': '1234',
                'bank_account_name': 'abc',
                'bank_ifsc': '1235',
                'upi_ID': '12345'},
                'Address Details': {
                    'country': 'india',
                    'state': 'telangana',
                    'district': 'hyd',
                    'sub_district': 'hyd',
                    'address': 'flat num 311',
                    'PIN_code': '500048'},
                    'Status': 'In Progress',
                    'Stage': 'State',
        },
        {
            '_id': '63f8e6a2c562bca6ea830b55',
            'username': 'Nikhil',
            'email': 'mnikhiln17@gmail.com',
            'mobile': '8019692599',
            'password': 'Nikhil',
            'Organization Details': {
                'type_of_oraganisation': 'Proprietary',
                'cin': 'L27100MH1907PLC000260',
                'pan': 'AAAAA8888A',
                'gst': '22AAAAA0000A1Z5',
                'udhyam': 'AAAAA9999A',
            },
            'Bank Details': {
                'bank_account_number': '111111111',
                'bank_account_name': 'Nikhil',
                'bank_ifsc': 'naabank@ybl',
                'upi_ID': 'naabank@ybl'},
                'Address Details': {
                    'country': 'India',
                    'state': 'Telangana',
                    'district': 'Hyderabad',
                    'sub_district': 'rangaredyy',
                    'address': 'plo169',
                    'PIN_code': '500010',
                },
            'Status': 'In Progress',
            'Stage': 'Sub District',
        },
        // {
        //     '_id': '63f74b1909783f15d01ce490',
        //     'username': 'sripriya',
        //     'email': 'sripriyamaturi8@gmail.com',
        //     'mobile': '919701044584',
        //     'password': 'abcd',
        //     'Organization Details': {
        //         'type_of_oraganisation': 'xyz',
        //         'cin': '1234',
        //         'pan': 'ewj2',
        //         'gst': '3ndj',
        //         'udhyam': 'ehjj',
        //     },
        //     'Bank Details': {
        //         'bank_account_number': '1234',
        //         'bank_account_name': 'abc',
        //         'bank_ifsc': '1235',
        //         'upi_ID': '12345'},
        //         'Address Details': {
        //             'country': 'india',
        //             'state': 'telangana',
        //             'district': 'hyd',
        //             'sub_district': 'hyd',
        //             'address': 'flat num 311',
        //             'PIN_code': '500048'},
        //             'Status': 'In Progress',
        //             'Stage': 'State',
        // },
        // {
        //     '_id': '63f8e6a2c562bca6ea830b55',
        //     'username': 'Nikhil',
        //     'email': 'mnikhiln17@gmail.com',
        //     'mobile': '8019692599',
        //     'password': 'Nikhil',
        //     'Organization Details': {
        //         'type_of_oraganisation': 'Proprietary',
        //         'cin': 'L27100MH1907PLC000260',
        //         'pan': 'AAAAA8888A',
        //         'gst': '22AAAAA0000A1Z5',
        //         'udhyam': 'AAAAA9999A',
        //     },
        //     'Bank Details': {
        //         'bank_account_number': '111111111',
        //         'bank_account_name': 'Nikhil',
        //         'bank_ifsc': 'naabank@ybl',
        //         'upi_ID': 'naabank@ybl'},
        //         'Address Details': {
        //             'country': 'India',
        //             'state': 'Telangana',
        //             'district': 'Hyderabad',
        //             'sub_district': 'rangaredyy',
        //             'address': 'plo169',
        //             'PIN_code': '500010',
        //         },
        //     'Status': 'In Progress',
        //     'Stage': 'Sub District',
        // },
        // {
        //     '_id': '63f74b1909783f15d01ce490',
        //     'username': 'sripriya',
        //     'email': 'sripriyamaturi8@gmail.com',
        //     'mobile': '919701044584',
        //     'password': 'abcd',
        //     'Organization Details': {
        //         'type_of_oraganisation': 'xyz',
        //         'cin': '1234',
        //         'pan': 'ewj2',
        //         'gst': '3ndj',
        //         'udhyam': 'ehjj',
        //     },
        //     'Bank Details': {
        //         'bank_account_number': '1234',
        //         'bank_account_name': 'abc',
        //         'bank_ifsc': '1235',
        //         'upi_ID': '12345'},
        //         'Address Details': {
        //             'country': 'india',
        //             'state': 'telangana',
        //             'district': 'hyd',
        //             'sub_district': 'hyd',
        //             'address': 'flat num 311',
        //             'PIN_code': '500048'},
        //             'Status': 'In Progress',
        //             'Stage': 'State',
        // },
        // {
        //     '_id': '63f8e6a2c562bca6ea830b55',
        //     'username': 'Nikhil',
        //     'email': 'mnikhiln17@gmail.com',
        //     'mobile': '8019692599',
        //     'password': 'Nikhil',
        //     'Organization Details': {
        //         'type_of_oraganisation': 'Proprietary',
        //         'cin': 'L27100MH1907PLC000260',
        //         'pan': 'AAAAA8888A',
        //         'gst': '22AAAAA0000A1Z5',
        //         'udhyam': 'AAAAA9999A',
        //     },
        //     'Bank Details': {
        //         'bank_account_number': '111111111',
        //         'bank_account_name': 'Nikhil',
        //         'bank_ifsc': 'naabank@ybl',
        //         'upi_ID': 'naabank@ybl'},
        //         'Address Details': {
        //             'country': 'India',
        //             'state': 'Telangana',
        //             'district': 'Hyderabad',
        //             'sub_district': 'rangaredyy',
        //             'address': 'plo169',
        //             'PIN_code': '500010',
        //         },
        //     'Status': 'In Progress',
        //     'Stage': 'Sub District',
        // },
    ]

  useEffect(() => {

    // const back = async()=>
    // {
    //     const fetchresponse = await fetch('http://apnafood.org.in/all_vendors');
    //     const data = await fetchresponse.json();
    //     console.log(data);
    // }

    // back();
    fetch("http://apnafood.org.in/all_vendors")
    .then(data =>console.log(data))
    // .then(data=>data.json())
    // .then(data=>set_vendor_details(data["all_vendors"]))
    .catch(err=>console.log(err));

  }, [])

    return (
    <View style={styles.Container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        >
        <View
        style={styles.menu_container}
        >
        <Text
        style={styles.heading1}
        >Vendors</Text>
        {vendor_details.map((data, id)=>{
            return (
                <>
                <TouchableOpacity
                key={id}
                onPress={() =>{ navigation.navigate('Subdistrict_s3',{data});}}
                    style={styles.box}
                >
                    <Text
                    style={styles.heading2}
                    >
                        Vendor #{id}
                    </Text>
                    <Text
                    style={styles.innner_text}
                    >
                        Name : {data.username}
                    </Text>
                    <Text
                    style={styles.innner_text}
                    >Phone : {data.mobile}</Text>
                    <Text
                    style={styles.innner_text}
                    >
                        Email : {data.email}
                    </Text>
                </TouchableOpacity>
                </>
            );
        })}
        </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

    Container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f5f5f5',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
        // backgroundColor:'red',
    },
    scroll:
    {
        width: '90%',
    },
    heading1:{
        paddingLeft: "2%",
        // alignSelf:'flex-start',
        color:'black',
        fontSize:24,
        // fontWeight:'700',
        marginVertical:'8%',
        alignSelf: 'flex-start',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
    heading2:{
        color:'#f26422',
        fontSize:20,
        marginBottom:'4%',
        alignSelf: 'flex-start',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
    menu_container:{
        flex:1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        height:'90%',
        width:'100%',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
        // backgroundColor:'blue'
    },
    box:{
        // flex:1,
        // justifyContent:'space-between',
        // alignItems: 'center',
        padding:'6%',
        margin:'2%',
        width:'100%',
        borderRadius:10,
        backgroundColor:'#ffffff',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
        lineHeight:10,
        borderColor:"#cccccc",
        borderWidth:0.8,
        // shadowOffset: {
        //     width: 2,
        //     height: 2,
        // },
        // shadowOpacity: 0,
        // shadowRadius: 0,
        // elevation: 1.5,
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
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
});

export default Subdistrict_s2;
