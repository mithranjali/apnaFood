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
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
const Screen5 = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Country"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="State"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="District"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Sub-district"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Address"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Pin Code"
        />

        <TextInput
          style={styles.input_location}
          onChangeText={onChangeText}
          value={text}
          placeholder="GIS"
        />


        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={{ fontSize: 15 }}>Submit</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  Container: {
    // paddingTop: 50,
    // height: '100%',
    backgroundColor: 'white',
  },

  input: {
    height: 40,
    margin: 12,
    marginHorizontal: 40,
    borderBottomWidth: 1.3,
    padding: 10,
    marginVertical: 20,
  },

  input_location: {
    height: 40,
    margin: 12,
    marginHorizontal: 40,
    borderBottomWidth: 1.3,
    padding: 10,
    marginVertical: 20,
    borderStyle:'dashed',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    width: 340,
    alignSelf: 'center',
    marginVertical: 20,
    // marginTop: 90,
  },

});

export default Screen5;