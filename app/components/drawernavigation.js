import * as React from 'react';
import {Text,View,Button,Pressable,StatusBar,StyleSheet,Image} from "react-native"
import { NavigationContainer, useNavigationState} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

//
import { Route } from '../../App';

import { IconButton } from "@react-native-material/core"


// all drawer screen imported
import Mainscreen from "../screens/drawerscreens/Home";
import AboutusScreen from "../screens/drawerscreens/AboutUsScreen";
import Portfolioscreen from '../screens/drawerscreens/Portfolio';
import Myprofilescreen from '../screens/drawerscreens/myProfie';
import LoginScreen from '../screens/loginscreen';
import Managebooking from '../screens/drawerscreens/ManageBooking';
import { ScreenStack } from 'react-native-screens';
import Chatui from './chatUI';
// image importing

const Stack = createNativeStackNavigator();


export function Screenstackk(){
    return (<>
    <NavigationContainer>
    <Stack.Screen name="aboutus" component={AboutusScreen} />
    <Stack.Screen name="portfolio" component={Portfolioscreen} />
    <Stack.Screen name="managebooking" component={Managebooking} />
    <Stack.Screen name="myprofile" component={Myprofilescreen}  />
    </NavigationContainer>
    </>)
  }



 function Nav(){

const Drawer = createDrawerNavigator();
const navigations = useNavigation();


const CustomDrawer = (props) => {
    return (<>
    
       <View>
       <View>
        <Image style={styles.Imagecss} source={require('../../assets/dummydata_images/precious_banquet.jpg')} />
       </View>
       <Text style={styles.BanquetNameCss}> Precious Banquet</Text>
       </View>
        <Text></Text>
        <DrawerItemList {...props} />
    
    </>)
}

return(
<>
    <StatusBar barStyle="dark" />
   
   
    <NavigationContainer independent={true}>

        <Drawer.Navigator drawerContent={(props)=><CustomDrawer {...props}/>} initialRouteName="Inquiries">

    <Drawer.Screen name="Inquiries" component={Mainscreen} 
        options={{
        drawerLabel:"Home"  ,
        drawerIcon: ({size}) => ( 
        <Icon name="home"  
        size={size} 
        color='black'
        /> ),
        }} />



    <Drawer.Screen name="Portfolio" component={Portfolioscreen}
        options={({navigation})=> ({
            
        headerLeft:()=> (<IconButton style={{marginLeft:10}} onPress={()=>{navigation.goBack(),navigation.toggleDrawer()}} icon={() => <Icon2 name='arrowleft' size={25} color='black' />} />),
        headerTitle:'Portfolio',
        drawerLabel:"portfolio",
        drawerIcon: ({size}) => (
    
            <Icon name="image"
        size={size}
        color='black'
        /> ),
     })
    }
    />

    <Drawer.Screen name="MyProfile" component={Myprofilescreen}

        options={({navigation})=>({
            headerLeft:()=> (<IconButton style={{marginLeft:10}} onPress={()=>{navigation.goBack(),navigation.toggleDrawer()}} icon={() => <Icon2 name='arrowleft' size={25} color='black' />} />),
headerTitle:'Profile',
            drawerLabel:"My Profile",
          drawerIcon: ({size}) => (
       
            <Icon name="user"
        size={size}
        color='black'
        /> ) })} />

    <Drawer.Screen name="About Us" component={AboutusScreen}
        options={({navigation})=>({
            headerTitle:'About Us',
            headerLeft:()=> (<IconButton style={{marginLeft:10}} onPress={()=>{navigation.goBack(),navigation.toggleDrawer()}} icon={() => <Icon2 name='arrowleft' size={25} color='black' />} />),
        drawerLabel:"About Us",
        drawerIcon: ({size}) => (
         <Icon name="info"
        size={size}
        color='black'
        /> ) })} />

    

   <Drawer.Screen name="Manage Booking" component={Managebooking}
        options={({navigation})=>({
            headerLeft:()=> (<IconButton style={{marginLeft:10}} onPress={()=>{navigation.goBack(),navigation.toggleDrawer()}} icon={() => <Icon2 name='arrowleft' size={25} color='black' />} />),
           headerTitle:'Booking List',
            drawerLabel:"Manage Booking",
            drawerIcon: ({size}) => (
       
            <Icon name="bookmark"
        size={size}
        color='black'
        /> ) })}

        />

<Drawer.Screen name="Sign Out" component={LoginScreen} 
        options={{
            drawerLabel:"Sign Out",
            drawerIcon: ({size}) => (
       
            <Icon name="sign-out"
        size={size}
        color='black'
        /> ) }}
listeners={()=>{navigations.navigate('LoginScreen')}}
        />
   
   <Drawer.Screen name='UI' component={Chatui} options={({navigation})=>({
    headerTitle:'',
    drawerLabel:'',
    headerLeft:()=> (<IconButton style={{marginLeft:10}} onPress={()=>{navigation.goBack()}} icon={() => <Icon2 name='arrowleft' size={25} color='black' />} />),
    
    })} />
        </Drawer.Navigator>


    
        </NavigationContainer>
    </>
    
    
    )
}


// drawerContent={props=><Drawercontent{...props}/ >}

const styles = StyleSheet.create({
    
    Container:{
        flex:1,
},
    
    Imagecss:{
        height:240,
        width:'100%',
    },
    BanquetNameCss:{
        color:'black',
        marginTop:10,
        fontFamily: 'dancingfont' ,
        fontSize: 35,
        marginLeft: 15 ,
    }
})

export default Nav ;