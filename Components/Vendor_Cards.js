/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const Vendor_Cards = ({navigation,data,id}) => {

    return (
        <TouchableOpacity
        key={data.phone}
        onPress={() =>{ navigation.navigate('Subdistrict_s3',{data});}}
        style={styles.box}
        >
            <Text style={styles.heading2}>
                Vendor #{id+1}
            </Text>

            <Text style={styles.innner_text}>
                Name : {data.username}
            </Text>

            <Text style={styles.innner_text}>
                Phone : {data.mobile}
            </Text>

            <Text style={styles.innner_text}>
                Email : {data.email}
            </Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    heading2:{
        color:'#f26422',
        fontSize:20,
        marginBottom:'4%',
        alignSelf: 'flex-start',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
    box:{
        padding:'6%',
        margin:'2%',
        width:'100%',
        borderRadius:10,
        backgroundColor:'#ffffff',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
        lineHeight:10,
        borderColor:'#cccccc',
        borderWidth:0.8,
    },
    innner_text:{
        color:'black',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
});

export default Vendor_Cards;
