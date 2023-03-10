/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
// import { Alert } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
const Screen5 = ({navigation,route}) => {
  const {user_name, user_password, user_phone, user_email, typeoforg, cin, gst, pan, udayam, user_UPI_ID, user_account_name, user_bank_IFSC_code, user_bank_account_number} = route.params;

  const [text, onChangeText] = React.useState('');
  const [country, set_country] = React.useState('');
  const [state, set_state] = React.useState('');
  const [district, set_district] = React.useState('');
  const [sub_district, set_sub_district] = React.useState('');
  const [address, set_address] = React.useState('');
  const [pin_code, set_pin_code] = React.useState('');
  const upload_details = () =>{

      const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name' : user_name,
        'email':user_email,
        'password': user_password,
        'phonenumber':user_phone,
        'typeoforg':typeoforg,
        'cin':cin,
        'pan':pan,
        'gst':gst,
        'udhyam':udayam,
        'accountnumber':user_bank_account_number,
        'accountname':user_account_name,
        'ifsc':user_UPI_ID,
        'upi': user_UPI_ID,
        'country':country,
        'state':state,
        'district': district,
        'subdistrict': sub_district,
        'address': address,
        'pincode':pin_code,

      }),
    };
    try {

      fetch('http://apnafood.org.in/insert_vendor',settings)
      .then(response=> response.json())
      .then(data=>
        {
          console.log(data);
          if (data === 'success')
          {
            Alert.alert('Uploaded Details');
            navigation.navigate('SignIn');
          }

        });
    }
    catch (err)
    {
      console.error('The Lower ' + err);
      Alert.alert('Server Error');
    }
  };
  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          value={country}
          onChangeText={val => set_country(val) }
          placeholderTextColor="#8399cf"
color="#8399cf"
          placeholder="Country"
        />

        <TextInput
          style={styles.input}
          value={state}
          onChangeText={val => set_state(val)}
          placeholderTextColor="#8399cf"
color="#8399cf"
          placeholder="State"
        />

        <TextInput
          style={styles.input}
          value={district}
          onChangeText={val => set_district(val)}
          placeholderTextColor="#8399cf"
color="#8399cf"
          placeholder="District"
        />

        <TextInput
          style={styles.input}
          value={sub_district}
          onChangeText={val => set_sub_district(val)}
          placeholder="Sub-district"
          placeholderTextColor="#8399cf"
color="#8399cf"
        />

        <TextInput
          style={styles.input}
          value={address}
          onChangeText={val => set_address(val)}
          placeholder="Address"
          placeholderTextColor="#8399cf"
color="#8399cf"
        />

        <TextInput
          style={styles.input}
          value={pin_code}
          onChangeText={val => set_pin_code(val)}
          placeholder="Pin Code"
          placeholderTextColor="#8399cf"
color="#8399cf"
        />

        <TextInput
          style={styles.input_location}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#8399cf"
color="#8399cf"
          placeholder="GIS"
        />

        <TouchableOpacity style={styles.button} onPress={() => {
        upload_details();
        }}>
          <Text style={{fontSize: 15, color:'#f5f5f5'}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    // paddingTop: 100,
    // height: '100%',
    backgroundColor: '#f5f5f5',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width:300,
    height: 50,
    margin: 12,
    marginHorizontal: 40,
    borderWidth: 1.2,
    padding: 10,
    marginBottom: 15,
    borderRadius:6,
    fontSize:14,
    borderColor:'#8399cf',
  },


  input_location: {
    height: 50,
    margin: 12,
    marginHorizontal: 40,
    borderWidth: 1.2,
    padding: 10,
    marginBottom: 15,
    borderRadius:6,
    fontSize:14,
    borderStyle: 'dashed',
    borderColor:'#8399cf',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#f26422',
    padding: 13,
    borderRadius:6,
    width: 300,
    alignSelf: 'center',
    fontFamily:'didactgothic-regular',
    marginTop:18,
  },
});

export default Screen5;
