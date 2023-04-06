import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image,ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import formbackgroundimage from '../../assets/formbackground.jpg'
import {
    launchImageLibrary
  } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';


const EVendorForm = () => {

    const navigation = useNavigation();
    const handleSubmit = () => {
        // just navigating
        navigation.navigate('Otpscreen');
    //image picker library used
        // const [image, setImage] = useState(null);

        // const handleImagePicker = (type) => {
        //         let options = {
        //           mediaType: type,
        //           maxWidth: 300,
        //           maxHeight: 550,
        //           quality: 1,
        //         };
        //         launchImageLibrary(options, (response) => {
        //           console.log('Response = ', response);
            
        //           if (response.didCancel) {
        //             alert('User cancelled camera picker');
        //             return;
        //           } else if (response.errorCode == 'camera_unavailable') {
        //             alert('Camera not available on device');
        //             return;
        //           } else if (response.errorCode == 'permission') {
        //             alert('Permission not satisfied');
        //             return;
        //           } else if (response.errorCode == 'others') {
        //             alert(response.errorMessage);
        //             return;
        //           }
        //           console.log('base64 -> ', response.base64);
        //           console.log('uri -> ', response.uri);
        //           console.log('width -> ', response.width);
        //           console.log('height -> ', response.height);
        //           console.log('fileSize -> ', response.fileSize);
        //           console.log('type -> ', response.type);
        //           console.log('fileName -> ', response.fileName);
        //           setFilePath(response);
        //         });
        //       };

    // form initlization
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [banquetHallName, setBanquetHallName] = useState('');

   


        // Perform form validation after mid
        // if (!name || !email || !phone || !banquetHallName) {
        //     alert('Please fill in all the required fields');
        //     return;
        // }

        // Submit the form data to the server
    
    };

    return (<>
       
            <View style={styles.Mainview}>
                <Text style={styles.Mainview_textstyle}>Register</Text>
                <Text style={styles.Mainview_textstyle2}>in Less than a minute</Text>
            </View>
            
           <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                placeholderTextColor={'black'}
                placeholder='Enter Full Name'
                    style={styles.input}
                    // value={name}
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput
                placeholderTextColor={'black'}
                placeholder='Enter Email Address'
                    style={styles.input}
                    // value={email}
                />
                <Text style={styles.label}>Phone:</Text>
                <TextInput
                placeholderTextColor={'black'}
                placeholder='Enter Phone Number'
                    style={styles.input}
                    // value={phone}
                />
                <Text style={styles.label}>Banquet Hall Name:</Text>
                <TextInput
                placeholderTextColor={'black'}

                placeholder='Enter Banquet Hall Name'
                    style={styles.input}
                    // value={banquetHallName}
                />

                
                <View style={styles.imagecontainer}>
                    <Button title="Select Banquet Images"  />
                    {/* {image && <Image source={image} style={styles.image} />} */}
                </View>
                
                <Text style={{marginLeft:'25%',marginBottom:20,fontWeight:'bold'}}> We'll Send verification code </Text>

                <View>
                <Button title='Submit' onPress={handleSubmit} />
                </View>

            </View>
            </ScrollView>
          
           
    </>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        padding: 20,
        backgroundColor: '#ffffff'
    },
    label: {
        flex:1,
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
        marginTop: 5,
        padding: 1,
        color:'black'
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
    ButtonCSS: {
        color:'blue',
        marginTop: 10,
        borderWidth: 3,
        borderColor: 'blue'

    },
    BTNtextCSS: {
     color: 'blue',
        paddingLeft: 150,
        marginBottom: 30,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    imagecontainer: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },

});

export default EVendorForm;


// after mid use code 

// onPress={handleImagePicker('photo')}