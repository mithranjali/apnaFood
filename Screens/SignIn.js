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
  SafeAreaView,
  Image,
  TextInput,
  // useState,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const SignIn = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  return (

      // <KeyboardAvoidingView
      // behavior='padding'
      // >
      <KeyboardAvoidingView 
      // behavior='padding'
      style={styles.Container}>
              <View style={styles.Container}>
        <Image style={styles.logo} source={require('../logo.png')} />

        <Text style={styles.text}>Sign In</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#8399cf"
          placeholder="User Name"
        />

        <TextInput
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

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={{ fontSize: 15, color: '#f5f5f5' }} >Sign In</Text>
        </TouchableOpacity>


      <View>
        <Text style={styles.text2}>──────── Or, login with ────────</Text>
      </View>

      <View style={styles.icon_container}>
        <TouchableOpacity>
          <Image style={styles.icons} source={require('../GoogleLogo.svg')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icons} source={require('../FacebookLogo.svg')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icons} source={require('../twitter.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icons} source={require('../ios.png')} />
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
    borderRadius: 10,
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
    borderWidth: 1.2,
    padding: 10,
    marginBottom: 6,
    borderRadius:10,
    fontSize:14,
    borderColor:'#8399cf',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f58551',
    padding: 15,
    borderRadius: 10,
    width: 300,
    alignSelf: 'center',
    marginVertical: 20,
  },

  text: {
    fontSize: 23,
    // alignSelf: 'left',
    // marginHorizontal:10,
    marginHorizontal: '10%',
    // marginVertical:'1%',
    marginTop: 16,
    color: 'black',
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
    borderRadius: 10,
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
