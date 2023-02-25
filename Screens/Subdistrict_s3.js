/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react';
import { Text, View, divider, TextInput,Image, TouchableOpacity, KeyboardAvoidingView, u, Alert, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';


const Subdistrict_s3 = ({navigation, route}) => {
  
    // console.log(route.params["data"]);
    const data = route.params["data"];
    return (
    <View style={styles.Container}>
        
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                width: '90%',
            }}
        >
        <Text
            style={styles.headingmain}
        >
            User Details
        </Text>

        <View style={styles.menu_container}>
        <Text
        style={styles.heading1}
        >
            General Details
        </Text>
            <Text style={styles.attribute}><Text style={styles.heading2} >Name :</Text> <Text style={styles.detail} >{data.username}</Text> </Text>
            <Text style={styles.attribute}><Text style={styles.heading2} >Email :</Text> <Text style={styles.detail} >{data.email}</Text> </Text>
            <Text style={styles.attribute}><Text style={styles.heading2} >Phone :</Text> <Text style={styles.detail} >{data.mobile}</Text> </Text>

            <View style={styles.line} />

        <Text
            style={styles.heading1}
        >
            Bank Details
        </Text>

        <Text style={styles.attribute}><Text style={styles.heading2} >Bank Acc No :</Text> <Text style={styles.detail} >{data["Bank Details"]["bank_account_number"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Bank Acc Na :</Text> <Text style={styles.detail} >{data["Bank Details"]["bank_account_name"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Bank IFSC No :</Text> <Text style={styles.detail} >{data["Bank Details"]["bank_ifsc"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Bank UPI Id :</Text> <Text style={styles.detail} >{data["Bank Details"]["upi_ID"]}</Text> </Text>
        <View style={styles.line} />
        <Text
        style={styles.heading1}
        >Location Details</Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Country :</Text> <Text style={styles.detail} >{data["Address Details"]["country"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >State :</Text> <Text style={styles.detail} >{data["Address Details"]["state"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >District :</Text> <Text style={styles.detail} >{data["Address Details"]["district"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Sub District :</Text> <Text style={styles.detail} >{data["Address Details"]["sub_district"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Address :</Text> <Text style={styles.detail} >{data["Address Details"]["address"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Pincode :</Text> <Text style={styles.detail} >{data["Address Details"]["PIN_code"]}</Text> </Text>
        <View style={styles.line} />
        <Text
        style={styles.heading1}
        >Organization Details</Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Organization :</Text> <Text style={styles.detail} >{data["Organization Details"]["type_of_oraganisation"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >PAN Number:</Text> <Text style={styles.detail} >{data["Organization Details"]["pan"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >CIN Number :</Text> <Text style={styles.detail} >{data["Organization Details"]["cin"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >GST Number :</Text> <Text style={styles.detail} >{data["Organization Details"]["gst"]}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >UDHYAM:</Text> <Text style={styles.detail} >{data["Organization Details"]["udhyam"]}</Text> </Text>
        <View style={styles.line} />
        </View>
        </ScrollView>
        <View style={styles.buttons_container}>
        <TouchableOpacity>
            <View style={styles.button1}>
                <Text
                style={{
                    fontFamily:'didactgothic-regular',
                    letterSpacing:0.7,
                    color:'#f5f5f5',
                    fontSize:18,
                }}
                >Approve</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.button2}>
            <Text
                style={{
                    fontFamily:'didactgothic-regular',
                    letterSpacing:0.7,
                    color:'#f5f5f5',
                    fontSize:18,
                }}
                >Reject</Text>
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
        // padding:'6%',
        backgroundColor:'#f5f5f5'
        // backgroundColor:'red',
    },
    detail:{
        color:'#8399cf',
        fontSize:16,
    },
    buttons_container:{
        // backgroundColor:'red',
        width:'100%',
        margin:'3%',
        flexDirection: 'row',
        // alignItems:'',
        alignContent:'space-between',
        justifyContent: 'space-evenly',
    },
    button1:{
        backgroundColor:'#8EC63E',
        color:"#f5f5f5",
        // padding:'12%',
        width:'100%',
        alignItems:'center',
        height:50,
        paddingHorizontal:'16%',
        justifyContent: 'center',
        borderRadius:6,
    },
    button2:{
        backgroundColor:'red',
        // padding:'12%',
        width:'100%',
        height:50,
        paddingHorizontal:'16%',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:6,
    },
    headingmain:{
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
        fontSize:28,
        color:'#8399cf',
        // padding:8,
        alignSelf:'flex-start',
        marginVertical:'5%',
    },
    heading1:{
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
        // alignSelf:'flex-start',
        color:'black',
        fontSize:20,
        fontWeight:'500',
        marginBottom:'5%',
        alignSelf: 'flex-start',
    },
    heading2:{
        fontFamily:'didactgothic-regular',
        // color:'#f5f5f5',
        letterSpacing:0.7,
        fontSize:16,
        color:'black',
        marginVertical:'2%',
    },
    attribute:{
        fontSize:16,
        letterSpacing:0.7,
        marginVertical:2.4,
        fontFamily:'didactgothic-regular',
    },
    menu_container:{
        flex:1,
        width:'100%',
        // backgroundColor:'blue'
    },
    innner_text:{
    color:'black',
    },
    line:{
        marginVertical:15,
        borderBottomColor:'#999999',
        borderBottomWidth:StyleSheet.hairlineWidth,
        width:'100%',
    }
});

export default Subdistrict_s3;
