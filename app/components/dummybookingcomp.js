import React from "react";
import { Image, StyleSheet, View,TouchableOpacity,Text,ScrollView} from "react-native";
import Chatui from "./chatUI";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function Uicontainer(){
    
const Stack = createNativeStackNavigator();

    return<>
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name='UI' component={Chatui} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
}

const data = [ { 
   id:1,
   Username:'Shafay',
   Messagetext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
   MessageTime:'2 days ago',
   Userimg: require('../../assets/dummydata_images/emp1.jpg'),

},
{
    id:2,
    Username:'Tayab',
    Messagetext:'This is shafay from bahria university i want to book a banquet hall',
    MessageTime:'3 days ago',
    Userimg: require('../../assets/dummydata_images/emp2.jpeg'),
},
{
    id:3,
    Username:'Saad',
    Messagetext:'This is shafay from bahria university i want to book a banquet hall',
    MessageTime:'3 days ago',
    Userimg: require('../../assets/dummydata_images/emp3.jpg'),
},
{
    id:4,
    Username:'Zain',
    Messagetext:'This is shafay from bahria university i want to book a banquet hall',
    MessageTime:'3 days ago',
    Userimg: require('../../assets/dummydata_images/emp4.jpg'),
},
{   
    id:5,
    Username:'Musab',
    MessageTime:'3 days ago',
    Userimg: require('../../assets/dummydata_images/emp5.jpg'),   
}

]

function Dummybooking(props){
const navigations = useNavigation();
       
    return(
    
    <>
    <View style={{backgroundColor:'white' ,height:'100%'}}>

<ScrollView >

<TouchableOpacity style={styles.container} onPress={()=>navigations.navigate('UI')}>
    <View style={{flex:4,flexDirection:'column'}}>

<View style={{margin:5,flex:2,flexDirection:'row'}}>
<Text style={{margin:5,width:100,fontFamily:'Lato-Bold',width:45,color:'black'}}>{data[0].Username}</Text>
<Text style={{margin:5,fontSize:10,marginTop:8,fontWeight:'bold',color:'#D03D56'}}>{data[0].MessageTime}</Text>
</View>

<View style={{flex:5}}>
<Text style={{margin:10,color:'black'}}>{props.Messagetext}</Text>
</View>

</View>
<View style={{flex:1,marginTop:15}}>
<Image style={styles.img} source={data[0].Userimg} />
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.container} onPress={()=>navigations.navigate('UI')}>
    <View style={{flex:4,flexDirection:'column'}}>

<View style={{margin:5,flex:2,flexDirection:'row'}}>
<Text style={{margin:5,width:100,fontFamily:'Lato-Bold',width:45,color:'black'}}>{data[1].Username}</Text>
<Text style={{margin:5,fontSize:10,marginTop:8,fontWeight:'bold',color:'#D03D56'}}>{data[1].MessageTime}</Text>
</View>

<View style={{flex:5}}>
<Text style={{margin:10,color:'black'}}>{props.Messagetext}</Text>
</View>

</View>
<View style={{flex:1,marginTop:15}}>
<Image style={styles.img} source={data[1].Userimg} />
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.container} onPress={()=>navigations.navigate('UI')}>
    <View style={{flex:4,flexDirection:'column'}}>

<View style={{margin:5,flex:2,flexDirection:'row'}}>
<Text style={{margin:5,width:100,fontFamily:'Lato-Bold',width:45,color:'black'}}>{data[2].Username}</Text>
<Text style={{margin:5,fontSize:10,marginTop:8,fontWeight:'bold',color:'#D03D56'}}>{data[2].MessageTime}</Text>
</View>

<View style={{flex:5}}>
<Text style={{margin:10,color:'black'}}>{props.Messagetext}</Text>
</View>

</View>
<View style={{flex:1,marginTop:15}}>
<Image style={styles.img} source={data[2].Userimg} />
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.container} onPress={()=>navigations.navigate('UI')}>
    <View style={{flex:4,flexDirection:'column'}}>

<View style={{margin:5,flex:2,flexDirection:'row'}}>
<Text style={{margin:5,width:100,fontFamily:'Lato-Bold',width:45,color:'black'}}>{data[3].Username}</Text>
<Text style={{margin:5,fontSize:10,marginTop:8,fontWeight:'bold',color:'#D03D56'}}>{data[3].MessageTime}</Text>
</View>

<View style={{flex:5}}>
<Text style={{margin:10,color:'black'}}>{props.Messagetext}</Text>
</View>

</View>
<View style={{flex:1,marginTop:15}}>
<Image style={styles.img} source={data[3].Userimg} />
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.container} onPress={()=>navigations.navigate('UI')}>
    <View style={{flex:4,flexDirection:'column'}}>

<View style={{margin:5,flex:2,flexDirection:'row'}}>
<Text style={{margin:5,width:100,fontFamily:'Lato-Bold',width:45,color:'black'}}>{data[4].Username}</Text>
<Text style={{margin:5,fontSize:10,marginTop:8,fontWeight:'bold',color:'#D03D56'}}>{data[4].MessageTime}</Text>
</View>

<View style={{flex:5}}>
<Text style={{margin:10,color:'black'}}>{props.Messagetext}</Text>
</View>

</View>
<View style={{flex:1,marginTop:15}}>
<Image style={styles.img} source={data[3].Userimg} />
</View>
</TouchableOpacity>


</ScrollView>

</View>


</>

    )
}

const styles = StyleSheet.create({
    container:{
        height:100,
margin:20,
borderRadius:10,
backgroundColor:'#EDD498',
flexDirection:'row'

    },
    img:{
        flexDirection:'row',
marginLeft:2,
borderRadius:50,
height:60,
width:60,
    },

})


export default Dummybooking;