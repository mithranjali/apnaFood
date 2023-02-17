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
const Screen4 = ({navigation}) => {
    const [text, onChangeText] = React.useState('');
    return (
        <SafeAreaView style={styles.Container}>
            <KeyboardAvoidingView>
                <Text style={styles.text}>Bank Details</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Bank Account Number"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Bank Account Name"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Bank IFSC Code"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="UPI ID"
                />

                <TouchableOpacity 
                onPress={
                    ()=>{
                        navigation.navigate('Screen5');
                    }
                }
                style={styles.button} >
                    <Text style={{ fontSize: 15}}>Next  ➪</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        paddingTop: 50,
        height: '100%',
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
    button: {
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 15,
        borderRadius: 10,
        width: 340,
        alignSelf: 'center',
        marginVertical: 20,
        // marginTop: 190,
    },

    text: {
        fontSize: 20,
        color: 'black',
        marginLeft: 40,
        marginVertical:15,
        marginTop: 50,
    },
});

export default Screen4;