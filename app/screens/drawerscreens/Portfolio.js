import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

//images import
import main_hall from '../../../assets/main_hall.jpg'
import stage_area from '../../../assets/stage_area.jpg'
import entrance_area from '../../../assets/entrance_area.jpg'
import catering_area from '../../../assets/catering_area.jpg'
import parking_area from '../../../assets/parking_area.jpg'




export default function Portfolioscreen() {
   

    
   
   return (<>
        <View style={styles.Maincontainer}>

            <View style={styles.firstcontainer}>
                <TouchableOpacity style={styles.addalbumcontainer}>

                    <Icon style={{ marginLeft: '35%', marginTop: 60 }} name='add-photo-alternate' size={60} color='blue' />
                    <Text style={{ marginLeft: '33%', marginTop: 1 , fontFamily:'Lato-Bold' , color:'black' }}>Add Album</Text>


                </TouchableOpacity>
                <View style={{ flex: 1 , }}>
                    <ImageBackground style={{ flex: 1, margin: 15  }} source={main_hall} >
                       <Text style={styles.TextStyle} >Main Hall</Text> 
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.secondcontainer}>
            <ImageBackground style={{ flex: 1, margin: 15 }} source={stage_area} >
            <Text style={styles.TextStyle}>Stage Area</Text>
            </ImageBackground>

            <ImageBackground style={{ flex: 1, margin: 15  }} source={entrance_area} >
            <Text style={styles.TextStyle}>Entrance Area</Text> 
            </ImageBackground>
                
            </View>

            <View style={styles.thirdcontainer}>

            <ImageBackground style={{ flex: 1, margin: 15 }} source={catering_area} >
            <Text style={styles.TextStyle}>Catering Area</Text> 
            </ImageBackground>

            <ImageBackground style={{ flex: 1, margin: 15  }} source={parking_area} >
            <Text style={styles.TextStyle}>Parking Area</Text> 
            </ImageBackground>
            


            </View>


        </View>
    </>)
}

const styles = StyleSheet.create({

    Maincontainer: {
        flex: 1,
        flexDirection: 'column'
    },
    firstcontainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    secondcontainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    thirdcontainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    fourthcontainer: {
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row'
    },

    addalbumcontainer: {
        flex: 1,
        margin: 15,
        backgroundColor: '#e6e6e6'
    },
    TextStyle:{
        padding:3,
        marginLeft:10,
        backgroundColor:'white',
        color:'black',
        marginTop:160,
        fontSize:13,
        fontFamily:'Lato-Bold',
        fontWeight:'bold'
        
    }
    

})