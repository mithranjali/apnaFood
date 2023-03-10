/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Vendor_Cards from '../Components/Vendor_Cards';

const Subdistrict_s2 = ({navigation}) => {

    const [vendor_details, set_vendor_details] = useState([]);
    const [is_loading, set_is_loading] = useState(true);
    const [response, set_response] = useState('');
    useEffect(() => {
        fetch('http://apnafood.org.in/all_vendors')
        .then(data=>data.json())
        .then((data)=>
            {
                if (data==='no vendors')
                {
                    set_response('no vendors');
                    set_is_loading(false);
                }
                else
                {
                set_vendor_details(data.all_vendors);
                set_is_loading(false);
                }
            }
            )
            .catch(err=>
            {
                console.log(err);
                Alert.error('Server error while fetching details');
            });

  }, []);

    if (is_loading)
    {
        return (
            <View style={styles.Container}>
                <ActivityIndicator size = "large" color="#8ec63e"/>
                <Text style={styles.loading}>Loading</Text>
            </View>
        );
    }
    else if (response==='no vendors' || vendor_details.length===0)
    {
        return (
            <View style={styles.Container}>
            {/* <Text style={styles.heading1}>Vendors</Text> */}
                <Text style={styles.no_vendor}>No Vendor Details</Text>
            </View>
        );
    }
    return (
    <View style={styles.Container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        >
            <View style={styles.menu_container}>

            <Text style={styles.heading1}>Vendors</Text>

            {vendor_details.map((data, id)=>{
                return (
                    <Vendor_Cards
                    key = {data.mobile}
                    navigation={navigation} data={data} id={id}/>
                );
            })
            }

            </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

    Container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f5f5f5',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
    scroll:
    {
        width: '90%',
    },
    heading1:{
        paddingLeft: '2%',
        color:'#8399cf',
        fontSize:24,
        marginVertical:'8%',
        alignSelf: 'flex-start',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
    menu_container:{
        flex:1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        height:'90%',
        width:'100%',
        fontFamily:'didactgothic-regular',
        letterSpacing:0.7,
    },
    no_vendor:{
        fontFamily:'didactgothic-regular',
        color:'#8399cf',
        fontSize:16,
    },
    loading:{
        fontFamily:'didactgothic-regular',
        color:'#8ec63e',
        fontSize:16,
    },
});

export default Subdistrict_s2;
