/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';

const Screen3 = ({navigation}) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  // variable declarations
  const [cin, onChangecin] = React.useState(''); // CIN number and the function to modify the CIN number declaration
  const [pan, onChangepan] = React.useState('');// PAN number and the function to modify the PAN number declaration
  const [gst, onChangegst] = React.useState('');// GST number and the function to modify the GST number declaration
  const [udayam, onChangeudayam] = React.useState('');// UDAYAM number and the function to modify the UDAYAM number declaration

  // declaration of varaible flags to validate the entered details of organisation
  const [check_Valid_CIN,set_checkValid_CIN] = useState(false); // validate the entered details of CIN
  const [check_Valid_PAN,set_checkValid_PAN] = useState(false); // validate the entered details of PAN
  const [check_Valid_GST,set_checkValid_GST] = useState(false); // validate the entered details of GST
  const [check_Valid_UDAYAM,set_checkValid_UDAYAM] = useState(false); // validate the entered details of UDAYAM

  const data = [
    {key:'1', value:'SHG', disabled:true},
    {key:'2', value:'Proprietary'},
    {key:'3', value:'One Person Company'},
    {key:'4', value:'Partnership Firm'},
    {key:'5', value:'LLP'},
    {key:'6', value:'Private Limited Company,'},
    {key:'7', value:'Farmer Producer Company'},
    {key:'8', value:'Farmers Cooperative Society'},
    {key:'9', value:'Section 8 Company,'},
    {key:'10', value:'Public Limited Company'},
    {key:'11', value:'House Wife'},
]; // different organisations present in the dropdown list
 const handle_Check_CIN = (text)=>{ // handling function which validates the CIN number
  const regex = /^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/; //  regex expression which is compared with entered CIN
  onChangecin(text);
  if (regex.test(text)){
    set_checkValid_CIN(false); // CIN flag is updated to false
  }
  else {
    set_checkValid_CIN(true); // CIN flag is updated to true
  }
 };
 const handle_Check_PAN = (text)=>{ // handling function which validates the PAN number
  const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/; //  regex expression which is compared with entered PAN
  onChangepan(text);
  if (regex.test(text)){
    set_checkValid_PAN(false);// PAN flag is updated to false
  }
  else {
    set_checkValid_PAN(true); // PAN flag is updated to true
  }
 };
 const handle_Check_GST = (text)=>{ // handling function which validates the GST number
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;  //  regex expression which is compared with entered GST
  onChangegst(text);
  if (regex.test(text)){
    set_checkValid_GST(false); // GST flag is updated to false
  }
  else {
    set_checkValid_GST(true); // GST flag is updated to true
  }
 };
 const handle_Check_UDAYAM = (text)=>{ // handling function which validates the UDAYAM number
  const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/; // regex expression which is compared with entered UDAYAM number
  onChangeudayam(text);
  if (regex.test(text)){
    set_checkValid_UDAYAM(false); // UDAYAM flag is updated to false
  }
  else {
    set_checkValid_UDAYAM(true); // UDAYAM flag is updated to true
  }
 };
  return (
    <SafeAreaView style={styles.safe_area_style}>
      <KeyboardAvoidingView>
      <Text style={styles.heading}>Organisation Details</Text>

      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="value"
          valueField="key"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.key);
            setIsFocus(false);
          }}
        />
      </View>

          <TextInput style={styles.input} value={cin} onChangeText={text =>handle_Check_CIN(text)}
          placeholderTextColor="#8399cf"
          placeholder=" CIN " />
          {
            check_Valid_CIN ? (
              <Text style={styles.textFailed}> wrong CIN format</Text>) : (<Text style={styles.textFailed} />)

          }
          <TextInput style={styles.input}
          value={pan}  onChangeText={text =>handle_Check_PAN(text)}
          placeholderTextColor="#8399cf"
          placeholder=" PAN " />
          {
            check_Valid_PAN ? (
              <Text style={styles.textFailed}> wrong PAN format</Text>) : (<Text style={styles.textFailed} />)

          }
          <TextInput style={styles.input}
          value={gst} onChangeText={text =>handle_Check_GST(text)}
          placeholderTextColor="#8399cf"
          placeholder=" GST " />
          {
            check_Valid_GST ? (
              <Text style={styles.textFailed}> wrong GST format</Text>) : (<Text style={styles.textFailed} />)

          }
          <TextInput style={styles.input}
          value={udayam} onChangeText={text =>handle_Check_UDAYAM(text)}
          placeholderTextColor="#8399cf"
          placeholder=" UDAYAM " />
          {
            check_Valid_UDAYAM ? (
              <Text style={styles.textFailed}> wrong UDAYAM format</Text>) : (<Text style={styles.textFailed} />)
          }
          <TouchableOpacity
          onPress={
            ()=>{
              navigation.navigate('Screen4');
            }
          } style={styles.button}>
          <Text style={{ fontSize: 22,fontWeight:'bold', color:'#f5f5f5' }}>Next</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area_style: {
    // paddingTop: 50,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  heading:{
    fontSize: 24,
    marginLeft:'12%',
    marginBottom:0,
    color:'#8399cf',
  },
  input:{
    height: 50,
    width:300,
    // margin: 12,
    marginHorizontal: 40,
    borderWidth: 1.2,
    padding: 10,
    // marginBottom: 15,
    borderRadius:6,
    fontSize:14,
    borderColor:'#8399cf',
  },
  dropdown: {
    alignSelf: 'center',
    height: 50,
    width:300,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 20,
    color:'#8399cf',
  },
  selectedTextStyle: {
    fontSize: 20,
    color:'#8399cf',
  },
  inputSearchStyle: {
    height: 60,
    fontSize: 15,
    color :'#8399cf',
  },
  container: {
    // marginTop:50,
    padding: 16,
    alignContent:'center',
  },
  textFailed:{
    fontSize:14,
    color:'red',
    textAlign:'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f58551',
    padding: 13,
    borderRadius:6,
    width: 300,
    alignSelf: 'center',
    // marginVertical: 10,
  },
});


export default Screen3;
