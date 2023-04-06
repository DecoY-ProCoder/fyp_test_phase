import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image,ImageBackground } from 'react-native';
 
function Otpscreen({navigation}){

    function preshandler(){
navigation.navigate('Nav')
    }

    return(<>
<View style={styles.Mainview}>
<Text style={styles.Mainview_textstyle}>Verification</Text>
<Text style={styles.Mainview_textstyle2}>in Less than a minute</Text>
</View>
<View style={styles.container}>
<Text style={{marginTop:5,marginLeft:8}}>we've send 6 digit verification code</Text>
                <Text style={styles.label}>Enter Code</Text>
                <TextInput
                placeholderTextColor={'#e6e6e6'}
                placeholder='Enter 6 digit code'
                    style={styles.input}
                    // value={name}
                />

<TouchableOpacity style={styles.button} onPress={preshandler}>
    <Text style={styles.btntext}>GET STARTED</Text>
  </TouchableOpacity>
</View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        padding: 20,
        backgroundColor: '#ffffff'
    },

    Mainview: {
        height: 160,
        width: '100%',
        backgroundColor: '#e6e6e6'
    },
    Mainview_textstyle:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop:40,
        marginLeft: 30,
    },
    Mainview_textstyle2:{
        color:'#C4A484',
        fontSize: 15,
        marginTop:5,
        marginLeft: 30,
        fontFamily: "sans-serif-medium" ,
    },
    label: {
        margin:10,
        fontWeight: 'bold',
        marginTop: 20,
        fontFamily: 'sans-serif-medium',
        color:'black',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomColor:'#DBAEAE',
        borderBottomWidth:2,
        marginBottom:10,
        marginTop: 3,
        padding: 1,
        margin:10,
        color:'black'
    },
    button:{
        marginBottom:30,
        margin:10,
        backgroundColor: '#9A2143',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext:{
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize:15,
        fontFamily:"sans-serif-medium",
    },
})

export default Otpscreen ;