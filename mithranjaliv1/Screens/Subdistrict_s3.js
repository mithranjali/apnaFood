/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, Modal } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Subdistrict_s3 = ({navigation, route}) => {

    const data = route.params.data;
    const [showmodal,set_showmodal] = useState(false);
    const [rejectreason,set_rejectreason] = useState('');
    const [rejectactive, set_rejectactive] = useState(true);
    const [approveactive, set_approveactive] = useState(true);

    console.log(rejectreason);
    const backend_approve = () =>
    {

        console.log('Approved');
        fetch('http://apnafood.org.in/sub_district_accept?email='+data.email)
        .then(fdata=>fdata.json())
        .then((fdata)=>
            {
                if (fdata==='accepted by sub district franchisee')
                {
                    Alert.alert('User : "'+data.username + '" is Approved');
                    set_approveactive(false);
                }
            }
            )
        .catch(()=>Alert.alert('Please retry'));
    };
    const backend_reject = () =>
    {
        set_showmodal(false);
        console.log(rejectreason);
        console.log('Rejected');
        fetch('http://apnafood.org.in/sub_district_reject?email='+data.email)
        .then(fdata=>fdata.json())
        .then((fdata)=>
            {
                if (fdata==='rejected by sub district franchisee')
                {
                    Alert.alert('User : "'+data.username + '" is Rejected');
                    set_rejectactive(false);
                }
            }
            )
        .catch(()=>Alert.alert('Please retry'));
    };

    return (
    <View style={styles.Container}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={showmodal}
        >
            <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter the reason of rejection !</Text>
            <TextInput
            onChangeText={(text) => set_rejectreason(text)}
            multiline={true}
            numberOfLines={2}
                style={styles.input_reason}
            />
            <TouchableOpacity
            onPress={()=>{
                backend_reject();
            }}
            >
                <View style={styles.button_reason}>
                    <Text>Reject</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
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

        <Text style={styles.attribute}><Text style={styles.heading2} >Bank Acc No :</Text> <Text style={styles.detail} >{data['Bank Details']['bank_account_number']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Bank Acc Na :</Text> <Text style={styles.detail} >{data['Bank Details']['bank_account_name']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Bank IFSC No :</Text> <Text style={styles.detail} >{data['Bank Details']['bank_ifsc']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Bank UPI Id :</Text> <Text style={styles.detail} >{data['Bank Details']['upi_ID']}</Text> </Text>
        <View style={styles.line} />
        <Text
        style={styles.heading1}
        >Location Details</Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Country :</Text> <Text style={styles.detail} >{data['Address Details']['country']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >State :</Text> <Text style={styles.detail} >{data['Address Details']['state']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >District :</Text> <Text style={styles.detail} >{data['Address Details']['district']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Sub District :</Text> <Text style={styles.detail} >{data['Address Details']['sub_district']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Address :</Text> <Text style={styles.detail} >{data['Address Details']['address']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Pincode :</Text> <Text style={styles.detail} >{data['Address Details']['PIN_code']}</Text> </Text>
        <View style={styles.line} />
        <Text
        style={styles.heading1}
        >Organization Details</Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >Organization :</Text> <Text style={styles.detail} >{data['Organization Details']['type_of_oraganisation']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >PAN Number:</Text> <Text style={styles.detail} >{data['Organization Details']['pan']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >CIN Number :</Text> <Text style={styles.detail} >{data['Organization Details']['cin']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >GST Number :</Text> <Text style={styles.detail} >{data['Organization Details']['gst']}</Text> </Text>
        <Text style={styles.attribute}><Text style={styles.heading2} >UDHYAM:</Text> <Text style={styles.detail} >{data['Organization Details']['udhyam']}</Text> </Text>
        <View style={styles.line} />
        </View>
        </ScrollView>
        <View style={styles.buttons_container}>
        <TouchableOpacity
        disabled={!approveactive}
        onPress={()=>{backend_approve();}}
        >
            <View style={{
                backgroundColor:'#8EC63E',
                opacity:approveactive?1:0.8,
                color:'#f5f5f5',
                width:'100%',
                alignItems:'center',
                height:50,
                paddingHorizontal:'16%',
                justifyContent: 'center',
                borderRadius:6,
            }}>
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
        <TouchableOpacity
        disabled={!rejectactive}
        onPress={
                ()=>{
                    // backend_reject();
                    set_showmodal(true);
                    }
                }
        >
            <View style={{
                backgroundColor:'red',
                opacity:rejectactive?1:0.8,
                width:'100%',
                height:50,
                paddingHorizontal:'16%',
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:6,
            }}>
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
        backgroundColor:'#f5f5f5',
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
    // button1:{
    //     backgroundColor:'#8EC63E',
    //     color:'#f5f5f5',
    //     // padding:'12%',
    //     width:'100%',
    //     alignItems:'center',
    //     height:50,
    //     paddingHorizontal:'16%',
    //     justifyContent: 'center',
    //     borderRadius:6,
    // },
    // button2:{
    //     backgroundColor:'red',
    //     // padding:'12%',
    //     width:'100%',
    //     height:50,
    //     paddingHorizontal:'16%',
    //     alignItems:'center',
    //     justifyContent: 'center',
    //     borderRadius:6,
    // },
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
    },
    //modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      input_reason:{
        // borderColor:'green',
        // borderWidth:1,
        borderBottomColor:'black',
        borderBottomWidth:2,
        borderRadius:4,
        width:160,
        // height:60,
        margin:20,
      },
      button_reason:{
        backgroundColor:'#8cc7e2',
        // backgroundColor:'#8399cf',
        // padding:'12%',
        width:'100%',
        height:40,
        paddingHorizontal:'8%',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:6,
        },
        modalText:{
            color:'black',
            fontSize:16,
        },
});

export default Subdistrict_s3;
