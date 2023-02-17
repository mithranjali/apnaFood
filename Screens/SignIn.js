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
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView>

        <Image style={styles.logo} source={require('../logo.png')} />

        <Text style={styles.text}>Sign In</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="User Name"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.forgot_pswd_button}>
          <TouchableOpacity onPress={() => { }}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={{ fontSize: 15, color: 'black' }} >Sign In</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

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
          <Text>Create Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingTop: 50,
    height: '100%',
    backgroundColor: 'white',
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
    height: 40,
    margin: 12,
    marginHorizontal: 40,
    borderBottomWidth: 1.3,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    width: 340,
    alignSelf: 'center',
    marginVertical: 20,
  },

  text: {
    fontSize: 23,
    alignSelf: 'center',
    marginTop: 23,
    color: 'black',
  },

  text2: {
    alignSelf: 'center',
    marginTop: 23,
    color: 'black',
    marginBottom: 10,
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
    marginHorizontal: 40,
    marginVertical: 10,
  },

  icons:
  {
    borderRadius: 10,
    width: 50,
    height: 60,
    paddingHorizontal: 30,
    paddingVertical: 10,
    // borderColor: 'black',
    // borderWidth:0.7,
  },

  footer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 88,
    marginBottom: 30,
  },

  forgot_pswd_button:
  {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginLeft: 260,
    marginVertical: 30,
  },
});

export default SignIn;
