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

  const [cin, onChangecin] = React.useState('');
  const [pan, onChangepan] = React.useState('');
  const [gst, onChangegst] = React.useState('');
  const [udayam, onChangeudayam] = React.useState('');

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
]

  return (
    <SafeAreaView style={styles.safe_area_style}>
      <KeyboardAvoidingView
      // style={styles.safe_area_style}
      behavior="padding"
      >
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

          <TextInput style={styles.input} onChangeText={onChangecin}
          value={cin}
          placeholder=" CIN " />
          <TextInput style={styles.input} onChangeText={onChangepan}
          value={pan}
          placeholder=" PAN " />
          <TextInput style={styles.input} onChangeText={onChangegst}
          value={gst}
          placeholder=" GST " />
          <TextInput style={styles.input} onChangeText={onChangeudayam}
          value={udayam}
          placeholder=" UDAYAM " />
          <TouchableOpacity 
          onPress={
            ()=>{
              navigation.navigate('Screen4');
            }
          }
          style={styles.button}>
          <Text style={{ fontSize: 22,fontWeight:'bold' }}>Next</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  safe_area_style: {
    paddingTop: 50,
    height: '100%',
    backgroundColor: 'white',
  },
  heading:{
    fontSize: 30,
    alignSelf: 'center',
    // marginTop: ,
    color: 'black',
  },
  input:{
    height: 40,
    margin: 15,
    marginHorizontal: 40,
    borderBottomWidth: 1.3,
    padding: 10,
    marginBottom: 15,
    fontSize:20,
  },
  dropdown: {
    margin: 16,
    height: 50,
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
    color:'black',
  },
  selectedTextStyle: {
    fontSize: 20,
  },
  inputSearchStyle: {
    height: 60,
    fontSize: 15,
  },
  container: {
    marginTop:50,
    padding: 16,
    alignContent:'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 13,
    borderRadius: 10,
    width: 320,
    alignSelf: 'center',
    marginVertical: 50,
  },
});

export default Screen3;
