/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  // useState,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

const SignIn = ({ navigation }) => {

  const [user_email,set_user_email] = React.useState('');
  const [user_password,set_user_password] = React.useState('');

  const backend_signin = () =>{

  if (user_email === '')
  {
    Alert.alert('Please enter your email');
  }
  else if (user_password === '')
  {
    Alert.alert('Please enter your password');
  }
  else if (user_email === 'subdistrict@gmail.com' && user_password === 'subdistrict')
  {
    navigation.navigate('Subdistrict');
  }
  else
  {
    const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email':user_email,
      'password': user_password,
    }),
  };
  try {

    fetch('http://10.0.2.2:8000/api/login',settings)
    .then(response=>response.json())
    .then(data=>
      {
        if (data.status === 200)
        {
            navigation.navigate('VendorStatus',{
              email:user_email,
            });
        }
        else
        {
            Alert.alert('Login Failed, please try again')
        }
      })
    .catch(err=>
      {
      Alert.alert('Server Error');
      console.log(err);
      });

  }
  catch (err)
  {
    console.error('The Lower ' + err);
    Alert.alert('Server Error');
  }
  }
};

  return (
      <KeyboardAvoidingView

      style={styles.Container}>
              <View style={styles.Container}>
        <Image style={styles.logo} source={require('../MithranjaliLogo.png')} />

        <Text style={styles.text}>Sign In</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(val)=>set_user_email(val)}
          placeholderTextColor="#8399cf"
          placeholder="Email"
        />

        <TextInput
          onChangeText={(val)=>set_user_password(val)}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8399cf"
          secureTextEntry={true}
        />
        <View style={styles.forgot_pswd_button}>
          <TouchableOpacity onPress={() => { }}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {backend_signin()}}>
          <Text style={{ fontSize: 15, color: '#f5f5f5' }} >Sign In</Text>
        </TouchableOpacity>


      <View>
        <Text style={styles.text2}>──────── or login with ────────</Text>
      </View>

      <View style={styles.icon_container}>
        <TouchableOpacity>
          <Image style={styles.icons} source={require('../GoogleLogo.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icons} source={require('../FacebookLogo.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icons} source={require('../TwitterLogo.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icons} source={require('../AppleLogo.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text
        > Don't have an account ?</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('OtpScreen');

        }
        }>
          <Text style={{ fontWeight: '700' }}> Create Now</Text>
        </TouchableOpacity>
      </View>
      </View>
      </KeyboardAvoidingView>



      // </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 50,
    height: 100,
    backgroundColor: '#f5f5f5',
  },

  logo: {
    alignSelf: 'center',
    borderRadius:6,
    width: 160,
    height: 170,
  },

  signIn: {
    color: 'black',
    fontFamily: 'Helvetica',
  },

  input: {
    height: 50,
    margin: 20,
    width:300,
    marginHorizontal: 40,
    borderWidth: 0.9,
    padding: 10,
    marginBottom: 6,
    borderRadius:6,
    fontSize:14,
    borderColor:'#8399cf',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f58551',
    padding: 15,
    borderRadius:6,
    width: 300,
    alignSelf: 'center',
    marginVertical: 20,
  },

  text: {
    fontSize: 23,
    alignSelf: 'flex-start',
    // marginHorizontal:10,
    marginHorizontal: '12%',
    marginTop: 20,
    // color: 'black',
    color :'#8399cf',
  },

  text2: {
    alignSelf: 'center',
    marginTop: 23,
    color: 'black',
    marginBottom: 40,
    fontSize: 15,
  },

  text3: {
    marginTop: 23,
    marginBottom: 20,
    fontSize: 13,
    marginLeft: 260,
    fontWeight: 500,
  },

  icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginBottom: '6%',
  },

  icons:
  {
    borderRadius:6,
    width: 40,
    height: 40,
    marginHorizontal: 10,
    // paddingVertical: 10,
    // borderColor: 'black',
    // borderWidth:0.7,
  },

  footer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 80,
    // fontSize:'20px',
    // marginBottom: 30,
  },

  forgot_pswd_button:
  {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginHorizontal: 260,
    marginHorizontal:'10%',
    alignSelf:'flex-end',
    // marginRight:0,
    marginVertical: '4%',
  },
});

export default SignIn;
