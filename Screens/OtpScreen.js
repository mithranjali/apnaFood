/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import RnOtpTimer from 'rn-otp-timer';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, u } from 'react-native';
import { StyleSheet } from 'react-native';
import { ProgressSteps,ProgressStep } from 'react-native-progress-steps';


const OtpScreen = ({ navigation }) => {

  //States for appearance of otp slots and butto activation
  const [otp_input_email_show, set_otp_input_email_show] = useState(false);
  const [otp_input_phone_show, set_otp_input_phone_show] = useState(false);
  const [user_email_otp, set_user_email_otp] = useState('');
  const [user_phone_otp, set_user_phone_otp] = useState('');


  //States for details storage and validation
  const [user_name, set_user_name] = useState('');
  const [user_email, set_user_email] = useState('none');
  const [user_phone, set_user_phone] = useState('none');
  const [user_valid_email, set_user_valid_email] = useState(false);
  const [user_valid_phone, set_user_valid_phone] = useState(false);

  const backendOtp = ()=>
  {


    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user_email,
      }),
    };

    fetch('http://apnafood.org.in/email_otp',settings)
    .then(response=>response.json())
    .then(console.log);
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

    <View>
    <Text
    style={styles.heading}
    >
     User Details
    </Text>
    </View>
    {/* <RnOtpTimer
          style={styles.primary_otp}
          minutes={5}
          seconds={30}
          /> */}
      {/* Text Input Block */}
      <TextInput
        onChangeText={(text) => set_user_name(text)}
        style={styles.secondary_text_Input} placeholder="Name" />
      {/* This View is a container for Email Address ans its otp */}
      <View style={styles.primary_inputs_view}>
        {/* This input field takes email address */}
        <TextInput
          keyboardType="email-address"
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
          style={styles.primary_text_input}
          placeholder="Email Address" />
        <TouchableOpacity

          disabled={!user_valid_email} // The button is disabled if the email address is invalid
          onPress={() => { 
          set_otp_input_email_show(true); 
          backendOtp();
          }}
          style={styles.primary_touchable}>
          <View style={styles.primary_touchable_view}>
            <Text
            style={styles.button_sendotp}
            >Send Otp</Text>
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
      {otp_input_email_show ?
        <View>
          <View style={styles.primary_inputs_view}>
            <TextInput
              onChangeText={(text) => { set_user_email_otp(text); }}
              style={styles.primary_text_input} placeholder="OTP" />
            <TouchableOpacity
              disabled={!verify_email_active}
              // activeOpacity={verify_email_active? 1 : 0.7} // TODO Properly - Trying to distinguish between active verify button and inactive verify button
              style={styles.primary_touchable}>
              <View style={styles.primary_touchable_view}>
                <Text>Verify</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={styles.primary_text}
          >Check your email, otp ends in 5</Text>
          <View style={styles.extra_text_view}>
            <Text
              style={styles.primary_text}
            >Didn't receive the code ? </Text>
            <TouchableOpacity>
              <View>
                <Text style={styles.resend_button_style}>Resend ?</Text>
              </View>
            </TouchableOpacity>
          </View>
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
          style={styles.primary_text_input} placeholder="Phone Number" />
        <TouchableOpacity
          disabled={!user_valid_phone}
          onPress={() => { set_otp_input_phone_show(true); }}
          style={styles.primary_touchable}>
          <View style={styles.primary_touchable_view}>
            <Text
            style={styles.button_sendotp}
            >Send Otp</Text>
          </View>
        </TouchableOpacity>
      </View>
      {user_phone !== 'none' && !user_valid_phone ?
        <Text
          style={styles.validation_style}
        > Enter valid Phone Number</Text>
        : <></>}
      {/* This Block will appear only when the send otp button is pressed after validating email address */}
      {otp_input_phone_show ?
        <View>
          <View style={styles.primary_inputs_view}>
            <TextInput
              onChangeText={(text) => { set_user_phone_otp(text); }}
              style={styles.primary_text_input} placeholder="OTP" />
            <TouchableOpacity
              disabled={!verify_phone_active}
              style={styles.primary_touchable}>
              <View style={styles.primary_touchable_view}>
                <Text>Verify</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={styles.primary_text}
          >Check your phone number, otp ends in 5</Text>
          <View style={styles.extra_text_view}>
            <Text
              style={styles.primary_text}
            >Didn't receive the code ? </Text>
            <TouchableOpacity>
              <View>
                <Text style={styles.resend_button_style}>Resend ?</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        : <></>
      }

      {/* The Following code is for Submit Button */}
      <TouchableOpacity
      onPress={()=>
      {
        navigation.navigate('Screenthree');
      }}
      >
        <View style={styles.submit_touchable}>
          <Text> Next </Text>
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
  },

  touchable_otp: {
    // width: '100%',

  },
  primary_inputs_view: {
    // flex: 1,
    flexDirection: 'row',
    width: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary_touchable_view: {
    width: 75,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    // paddingHorizontal: 8,

    //The Only Line Config
    // borderTopWidth: 0,
    // borderRightWidth: 0,
    // borderLeftWidth: 0,
  },
  primary_text_input: {
    width: 185,
    height: 40,
    // width: 260,
    padding: 10,
    marginVertical: 16,
    // borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,

    //The only Line Config
    // borderTopWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
  },
  secondary_text_Input: {
    height: 40,
    width: 260,
    padding: 10,
    marginVertical: 12,
    // borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,

    //The Only Line Config
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // borderTopWidth: 0,
  },
  extra_text_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resend_button_style: {
    color: 'black',
  },
  primary_text: {
    textAlign: 'center',
    marginVertical: 2,
  },
  submit_touchable: {

    borderWidth: 1,
    // padding:8,
    margin: 30,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 5,
    // alignSelf:'flex-end'
    // justifySelf: 'center',
  },
  validation_style: {
    color: 'red',
    fontStyle: 'italic',
  },
  primary_otp:{
    margin:0,
    padding:0,
  },
  button_sendotp:{
    color:'black',
  },
  heading:{
    // color:'black',
    color:'#34568B',
    textAlign:'left',
    // marginRight:140,
    marginBottom:60,
    fontSize:20,
  },
  step:{
    // backgroundColor:"blue",
    marginTop:0,
    height:60,
    marginBottom:50,
    paddingBottom:0,

  }
});

export default OtpScreen;
