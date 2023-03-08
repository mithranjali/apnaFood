/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import RnOtpTimer from 'rn-otp-timer';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, u, Alert } from 'react-native';
import { StyleSheet } from 'react-native';

const OtpScreen = ({ navigation }) => {

  //States for appearance of otp slots and butto activation
  const [otp_input_email_show, set_otp_input_email_show] = useState(false);
  const [otp_input_phone_show, set_otp_input_phone_show] = useState(false);
  const [user_email_otp, set_user_email_otp] = useState('');
  const [user_phone_otp, set_user_phone_otp] = useState('');

  //States for shwoing verification status of user
  const [email_verified, set_email_verified] = useState(false);
  const [phone_verified, set_phone_verified] = useState(false);

  //States for details storage and validation
  const [user_name, set_user_name] = useState('');
  const [user_email, set_user_email] = useState('none');
  const [user_phone, set_user_phone] = useState('none');
  const [user_valid_email, set_user_valid_email] = useState(false);
  const [user_valid_phone, set_user_valid_phone] = useState(false);
  const [user_password, set_user_password] = useState('');

  //EMail OTP stuff
  const [received_email_otp, set_received_email_otp] = useState(0);
  const [email_otp_verified, set_email_otp_verified] = useState(false);

  //Phone OTP stuff
  const [received_phone_otp, set_received_phone_otp] = useState(0);
  const [phone_otp_verified, set_phone_otp_verified] = useState(false);
  const Backend_Email_Otp = ()=>
  {

    fetch('http://apnafood.org.in/email_otp?email='+user_email)
    .then(response=>response.json())
    .then(data => set_received_email_otp(data.otp))
    .catch((err) =>{
      console.log(err);
      Alert.alert('Internal Server Error');
    });
  };
  const Backend_Phone_Otp = ()=>
  {

    fetch('http://apnafood.org.in/sms_otp?phnnum=91'+user_phone)
    .then(response=>response.json())
    .then(data => set_received_phone_otp(data.otp))
    .catch((err) =>{
      console.log(err);
      Alert.alert('Internal Server Error');
    });
  };
  const verify_email_otp = () =>{

    if (Number(user_email_otp)===received_email_otp)
    {
      set_email_otp_verified(true);
      Alert.alert('Email OTP Verified Succesfully');
    }
    else
    {
      set_email_otp_verified(false);
      Alert.alert('Please check the OTP');
    }
  };
  const verify_phone_otp = () =>{

    if (Number(user_phone_otp)===received_phone_otp)
    {
      set_phone_otp_verified(true);
      Alert.alert('Mobile OTP Verified Succesfully');
    }
    else
    {
      set_phone_otp_verified(false);
      Alert.alert('Please check the OTP');
    }
  };

  //debug
  console.log(user_email_otp);
  console.log(user_phone_otp);

  //TODO - Tried distinguishing
  var verify_email_active = false;
  var verify_phone_active = false;

  if (user_email_otp.length === 4) {
    verify_email_active = true;
  }
  else {
    verify_email_active = false;
  }
  if (user_phone_otp.length === 4) {
    verify_phone_active = true;
  }
  else {
    verify_phone_active = false;
  }
  console.log('Verify Email Active : ' + verify_email_active);
  console.log('Verify Phone Active : ' + verify_phone_active);
  console.log('User email size :' + user_email.length);

  return (
    <View style={styles.whole_view}>{/* Whole View Block */}
    <Text
    style={styles.heading}
    >
     User Details
    </Text>
    {/* <RnOtpTimer
          style={styles.primary_otp}
          minutes={5}
          seconds={30}
          /> */}
      {/* Text Input Block */}
      <TextInput
        onChangeText={(text) => set_user_name(text)}
        style={styles.secondary_text_Input}
        placeholderTextColor="#8399cf"
color="#8399cf"
        placeholder="Name" />
      <TextInput
        onChangeText={(text) => set_user_password(text)}
        style={styles.secondary_text_Input}
        placeholderTextColor="#8399cf"
color="#8399cf"
        // type="password"
        secureTextEntry={true}
        placeholder="Password" />
      {/* This View is a container for Email Address ans its otp */}
      <View style={styles.primary_inputs_view}>
        {/* This input field takes email address */}
        <TextInput
          keyboardType="email-address"
          disabled = {!email_otp_verified}
          onChangeText={value => {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (value.match(validRegex)) {
              set_user_email(value);
              set_user_valid_email(true);
            }
            else {
              set_user_email(' ');
              set_user_valid_email(false);
            }
          }}
          // style={styles.primary_text_input}
            style={
              // eslint-disable-next-line react-native/no-inline-styles
              {
                fontFamily:'didactgothic-regular',
                letterSpacing:0.7,
                width: 225,
                height: 50,
                // width: 260,
                padding: 10,
                marginVertical: 16,
                // borderColor: 'black',
                color: email_otp_verified ?'#8ec63e':'#8399cf',
                borderWidth: 1,
                borderTopLeftRadius:6,
                borderBottomLeftRadius:6,
                borderTopColor: email_otp_verified ?'#8ec63e':'#8399cf',
                borderBottomColor: email_otp_verified ?'#8ec63e':'#8399cf',
                borderLeftColor: email_otp_verified ?'#8ec63e':'#8399cf',
                // borderRightColor:'transparent',
                borderRightColor:'#f5f5f5',

              }
            }
          placeholderTextColor={email_otp_verified ?'#8ec63e':'#8399cf'}
          placeholder={email_otp_verified ?user_email:'Email Addres'}/>
        <TouchableOpacity

          disabled={!user_valid_email || email_otp_verified} // The button is disabled if the email address is invalid
          onPress={() => {
          set_otp_input_email_show(true);
          Backend_Email_Otp();
          }}
          // style={styles.primary_touchable}
          >
          <View
          // eslint-disable-next-line react-native/no-inline-styles
            style={{
                width: 75,
                height: 50,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius:6,
                borderBottomRightRadius:6,
                backgroundColor:email_otp_verified?'#8ec63e':'#F26422',
                color:'#ffffff',
                borderColor:email_otp_verified?'#8ec63e':'#F26422',
            }}
          >
            <Text
            style={styles.button_sendotp}
            >{email_otp_verified?"Verified":"Send Otp"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* This block is to throw validation errors */}
      {user_email !== 'none' && !user_valid_email ?
        <Text
          style={styles.validation_style}
        > Enter valid Email id</Text>
        : <></>}
      {/* This Block will appear only when the send otp button is pressed after validating email address */}
      {otp_input_email_show && !email_otp_verified?
        <View>
          <View style={styles.primary_inputs_view}>
            <TextInput
            maxLength={4}
              onChangeText={(text) => { set_user_email_otp(text); }}
              style={styles.primary_text_input}
              placeholderTextColor="#8399cf"
color="#8399cf"
              placeholder="OTP" />
            <TouchableOpacity
            onPress={()=>{verify_email_otp()}}
              disabled={!verify_email_active}
              // activeOpacity={verify_email_active? 1 : 0.7} // TODO Properly - Trying to distinguish between active verify button and inactive verify button
              style={styles.primary_touchable}>
              <View style={styles.primary_touchable_view}>
                <Text style={styles.verify_style}>Verify</Text>
              </View>
            </TouchableOpacity>
          </View>
          {!email_otp_verified && <View style={styles.extra_text_view}>
          <Text style={styles.primary_text} >
            Check your email, otp ends in 5
          </Text>
            <View style={styles.extra_view_inside}>
            <Text
              style={styles.primary_text}
            >Didn't receive the code ? </Text>
            <TouchableOpacity
            onPress={()=>{Backend_Email_Otp()}}
            >
              <View>
                <Text style={styles.resend_button_style}>Resend ?</Text>
              </View>
            </TouchableOpacity>
            </View>
          </View>}
        </View>
        : <></>
      }
      <View style={styles.primary_inputs_view}>
        <TextInput
          keyboardType="numeric"
          maxLength={10}
          onChangeText={value => {
            var validRegex = /^\d{10}$/;
            if (value.match(validRegex)) {
              set_user_phone(value);
              set_user_valid_phone(true);
            }
            else {
              set_user_phone(' ');
              set_user_valid_phone(false);
            }
          }}
          style={
              // eslint-disable-next-line react-native/no-inline-styles
              {
                fontFamily:'didactgothic-regular',
                letterSpacing:0.7,
                width: 225,
                height: 50,
                // width: 260,
                padding: 10,
                marginVertical: 16,
                // borderColor: 'black',
                color: phone_otp_verified ?'#8ec63e':'#8399cf',
                borderWidth: 1,
                borderTopLeftRadius:6,
                borderBottomLeftRadius:6,
                borderTopColor: phone_otp_verified ?'#8ec63e':'#8399cf',
                borderBottomColor: phone_otp_verified ?'#8ec63e':'#8399cf',
                borderLeftColor: phone_otp_verified ?'#8ec63e':'#8399cf',
                // borderRightColor:'transparent',
                borderRightColor:'#f5f5f5',
              }
            }
          placeholderTextColor={phone_otp_verified ?'#8ec63e':'#8399cf'}
          placeholder={phone_otp_verified ?user_phone:'Phone Number'}

          />
        
        <TouchableOpacity

          disabled={!user_valid_phone || phone_otp_verified} // The button is disabled if the email address is invalid
          onPress={() => {
          set_otp_input_phone_show(true);
          Backend_Phone_Otp();
          }}
          // style={styles.primary_touchable}
          >
          <View
          // eslint-disable-next-line react-native/no-inline-styles
            style={{
                width: 75,
                height: 50,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius:6,
                borderBottomRightRadius:6,
                backgroundColor:phone_otp_verified?'#8ec63e':'#F26422',
                color:'#ffffff',
                borderColor:phone_otp_verified?'#8ec63e':'#F26422',
            }}
          >
            <Text
            style={styles.button_sendotp}
            >{phone_otp_verified?"Verified":"Send Otp"}</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          disabled={!user_valid_phone}
          onPress={() => {
            set_otp_input_phone_show(true);
            Backend_Phone_Otp();
            }}
          style={styles.primary_touchable}>
          <View style={styles.primary_touchable_view}>
            <Text
            style={styles.button_sendotp}
            >
              {phone_otp_verified?"Verified":"Send Otp"}
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
      {user_phone !== 'none' && !user_valid_phone ?
        <Text
          style={styles.validation_style}
        > Enter valid Phone Number</Text>
        : <></>}
      {/* This Block will appear only when the send otp button is pressed after validating email address */}
      {otp_input_phone_show && !phone_otp_verified?
        <View>
          <View style={styles.primary_inputs_view}>
            <TextInput
              onChangeText={(text) => { set_user_phone_otp(text); }}
              style={styles.primary_text_input}
              placeholder="OTP"
              placeholderTextColor="#8399cf"
color="#8399cf"
               />
            <TouchableOpacity
              onPress={()=>{verify_phone_otp()}}
              disabled={!verify_phone_active}
              style={styles.primary_touchable}>
              <View style={styles.primary_touchable_view}>
                <Text style={styles.verify_style}>Verify</Text>
              </View>
            </TouchableOpacity>
          </View>
          {!phone_otp_verified && <View style={styles.extra_text_view}>
          <Text style={styles.primary_text} >
            Check your Phone, otp ends in 5
          </Text>
            <View style={styles.extra_view_inside}>
            <Text
              style={styles.primary_text}
            >Didn't receive the code ? </Text>
            <TouchableOpacity
            onPress={()=>{Backend_Phone_Otp()}}
            >
              <View>
                <Text style={styles.resend_button_style}>Resend ?</Text>
              </View>
            </TouchableOpacity>
            </View>
          </View>}
          {/* <View style={styles.extra_text_view}>
          <Text style={styles.primary_text} >
            Check your Phone, otp ends in 5
          </Text>
            <View style={styles.extra_view_inside}>
            <Text
              style={styles.primary_text}
            >Didn't receive the code ? </Text>
            <TouchableOpacity
            onPress={()=>{Backend_Phone_Otp()}}
            >
              <View>
                <Text style={styles.resend_button_style}>Resend ?</Text>
              </View>
            </TouchableOpacity>
            </View>
          </View> */}
        </View>
        : <></>
      }
      {/* The Following code is for Submit Button */}
      <TouchableOpacity
      onPress={()=>
      {

        if (!email_otp_verified && !phone_otp_verified)
        {
          Alert.alert('Both Phone and Email OTPs Not Verified');
        }
        else if (!email_otp_verified)
        {
          Alert.alert('Email OTP Not Verified');
        }
        else if (!phone_otp_verified)
        {
          Alert.alert('Phone OTP Not Verified');
        }
        else if (email_otp_verified && phone_otp_verified)
        {

          navigation.navigate('Screenthree', {
                    user_name,
                    user_email,
                    user_phone,
                    user_password,
                  });

        }
        else
        {
          Alert.alert('Unknown Error');
        }
      }}
      >
        <View style={styles.submit_touchable}>
          <Text
          style={{
            color:'#f5f5f5',
            fontSize:18,
            fontFamily:'didactgothic-regular',
            textAlign:'center',
          }}
          > Next </Text>
        </View>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  whole_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#f5f5f5'
  },

  touchable_otp: {
    // width: '100%',

  },
  primary_inputs_view: {
    // flex: 1,
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary_touchable_view: {
    width: 75,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius:6,
    borderBottomRightRadius:6,
    backgroundColor:'#F26422',
    color:'#ffffff',
    borderColor:'#F26422',
  },
  primary_text_input: {
    fontFamily:'didactgothic-regular',
    letterSpacing:0.7,
    width: 225,
    height: 50,
    // width: 260,
    padding: 10,
    marginVertical: 16,
    // borderColor: 'black',
    borderWidth: 1,
    borderTopLeftRadius:6,
    borderBottomLeftRadius:6,
    borderTopColor:'#8399cf',
    borderBottomColor:'#8399cf',
    borderLeftColor:'#8399cf',
    borderRightColor:'transparent',



    //The only Line Config
    // borderTopWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
  },
  secondary_text_Input: {
    height: 50,
    width: 300,
    padding: 10,
    marginVertical: 12,
    borderColor:'#8399cf',
    borderWidth: 1,
    borderRadius:6,
    letterSpacing:0.7,

    //The Only Line Config
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // borderTopWidth: 0,
  },
  extra_text_view: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extra_view_inside:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resend_button_style: {
    color: 'black',
  },
  primary_text: {
    fontFamily:'didactgothic-regular',
    letterSpacing:0.7,
    textAlign: 'center',
    marginVertical: 2,
    color:'black',
    // color:'#F5F5F5',
    // fontSize:18,
  },
  submit_touchable: {

    borderWidth: 1,
    // padding:8,
    margin: 30,
    // height:50,
    width:300,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor:'#F26422',
    backgroundColor:'#F26422',

    // alignSelf:'flex-end'
    // justifySelf: 'center',
  },
  validation_style: {
    color: 'red',
    letterSpacing:0.7,
    fontSize:12,
    fontStyle: 'italic',
  },
  primary_otp:{
    margin:0,
    padding:0,
  },
  button_sendotp:{
    // color:'black',
    color:'#ffffff',
    fontFamily:'didactgothic-regular',
    letterSpacing:0.7,
  },
  heading:{
    // color:'black',
    fontFamily:'didactgothic-regular',
    letterSpacing:0.7,
    color:'#8399cf',
    // fontFamily:'Didact Gothic',
    // textAlign:'left',
    alignSelf:'flex-start',
    // marginRight:140,
    // marginBottom:'',
    marginLeft:'12%',
    marginVertical:10,
    fontSize:24,
  },
  step:{
    // backgroundColor:"blue",
    marginTop:0,
    height:60,
    marginBottom:50,
    paddingBottom:0,

  },
  verify_style:{
    fontFamily:'didactgothic-regular',
    color:'#f5f5f5',
  },
});

export default OtpScreen;
