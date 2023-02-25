/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
const Screen4 = ({navigation}) => {

    const [user_bank_account_number, set_user_bank_account_number] = useState('none');
  const [user_valid_account_number, set_user_valid_account_number] = useState(false);
  const [user_bank_IFSC_code, set_user_bank_IFSC_code] = useState('none');
  const [user_valid_bank_IFSC_code, set_user_valid_bank_IFSC_code] = useState(false);
  const [user_UPI_ID, set_user_UPI_ID] = useState('none');
  const [user_valid_user_UPI_ID, set_user_valid_UPI_ID] = useState(false);


  return (
    <SafeAreaView style={styles.Container}>
        <Text style={styles.text}>Bank Details</Text>
        <TextInput
          style={styles.input}
          //   value={text}
          placeholderTextColor='#8399cf'
          placeholder="Bank Account Number"
          onChangeText={value => {
              var validRegex =
              /^\d{9,18}$/;
              if (value.match(validRegex)) {
                set_user_bank_account_number(value);
                set_user_valid_account_number(true);
              }
              else {
                set_user_bank_account_number(' ');
                set_user_valid_account_number(false);
              }
          }}
          />
        {user_bank_account_number !== 'none' && !user_valid_account_number ? (
            <Text style={styles.validation_style}> Enter valid account number</Text>
        ) : (
            <></>
        )}

        <TextInput
          style={styles.input}
          //   onChangeText={onChangeText}
          placeholderTextColor='#8399cf'
          placeholder="Bank Account Name"
          />

        <TextInput
          style={styles.input}
          //   onChangeText={onChangeText}
          placeholderTextColor='#8399cf'
          placeholder="Bank IFSC Code"
          onChangeText={value => {
            var validRegex =
            /^[A-Z]{4}0[A-Z0-9]{6}$/;
            if (value.match(validRegex)) {
              set_user_bank_IFSC_code(value);
              set_user_valid_bank_IFSC_code(true);
            }
            else {
              set_user_bank_IFSC_code(' ');
              set_user_valid_bank_IFSC_code(false);
            }
        }}
        />
      {user_bank_IFSC_code !== 'none' && !user_valid_bank_IFSC_code ? (
          <Text style={styles.validation_style}> Enter valid IFSC code</Text>
      ) : (
          <></>
      )}

        <TextInput
          style={styles.input}
          //   onChangeText={onChangeText}
          placeholder="UPI ID"
          placeholderTextColor='#8399cf'
          onChangeText={value => {
            var validRegex =
            /^[\w.-]+@[\w.-]+$/;
            if (value.match(validRegex)) {
              set_user_UPI_ID(value);
              set_user_valid_UPI_ID(true);
            }
            else {
              set_user_UPI_ID(' ');
              set_user_valid_UPI_ID(false);
            }
        }}
        />
      {user_UPI_ID !== 'none' && !user_valid_user_UPI_ID ? (
          <Text style={styles.validation_style}> Enter valid IFSC code</Text>
      ) : (
          <></>
      )}

          <KeyboardAvoidingView>
          <TouchableOpacity 
          style={styles.button}
                onPress={
                    ()=>{
                        navigation.navigate('Screen5');
                    }
                }>
          <Text style={{fontSize: 15, color:'#f5f5f5'}}>Next ➪</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    //   paddingTop: 50,
    //   height: '100%',
      backgroundColor: '#f5f5f5',
    },
    input: {
      height: 50,
      margin: 12,
      width:300,
      marginHorizontal: 40,
      borderWidth: 1,
      padding: 10,
      marginBottom: 15,
      borderRadius:6,
      borderColor:'#8399cf',
      fontSize:14,
    },
    button: {
    alignItems: 'center',
    padding: 15,
    borderRadius:6,
    width: 300,
    //   alignSelf: 'center',
    marginVertical: 20,
    borderColor:'#f58551',
    backgroundColor:'#f58551'
    //   marginTop: 190,
    },
    text: {
      fontSize: 24,
      color:'#8399cf',
      alignSelf:'flex-start',
      marginLeft: '14%',
      marginVertical: 10,
    //   marginTop: 50,
    },
    validation_style: {
      color: 'red',
      fontStyle: 'italic',
      alignSelf: 'center',
    },
  });
export default Screen4;