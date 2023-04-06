import React from "react"
import { StyleSheet,View,TextInput,Text } from "react-native"
import { IconButton } from "@react-native-material/core"
import Icon from 'react-native-vector-icons/Ionicons';

function Chatui(props){
    return(
        <>
        <View style={style.container}>

<View style={style.subcontainer}>

<View style={{marginLeft:30,marginTop:20,backgroundColor:'#e6e6e6',flex:1,width:200,borderRadius:20,borderBottomLeftRadius:0,maxHeight:140}}>
<Text style={{margin:10,marginBottom:0,color:'black'}} >Hi,Central Wednue, I have Wedding function on 24 June,2021-sunday with 1500 guest </Text>
<Text style={{marginLeft:10, fontSize:10 , color:'blue' , fontWeight:'bold', marginTop:2} }>11:45 AM</Text>
</View>

<View style={{marginLeft:100,marginTop:20,backgroundColor:'#D03D56',flex:1,width:250,borderRadius:20,borderBottomRightRadius:0,maxHeight:120}}>
<Text style={{margin:10,color:'black'}}>Hello Sir , Thank you for your query with us</Text>
<Text style={{marginLeft:10,marginTop:20,fontSize:10 , color:'blue',fontWeight:'bold'} }>11:45 AM</Text>
</View>

<View style={{marginLeft:30,marginTop:20,backgroundColor:'#e6e6e6',flex:1,width:200,borderRadius:20,borderBottomLeftRadius:0,maxHeight:120}}>
<Text style={{margin:10,color:'black'}}>Let me know the costing for Venue for the single day?</Text>
<Text style={{marginLeft:10,marginTop:20,fontSize:10 , color:'blue',fontWeight:'bold'} }>11:45 AM</Text>
</View>

</View>

<View syle={{flex:1,flexDirection:'row'}}>
                
                <View style={{flexDirection:'row'}}>    
        <TextInput
                placeholderTextColor={'black'}
                placeholder='Write your message'
                    style={style.Input}
                    // value={banquetHallName}
                />
                <IconButton style={{flex:1,marginTop:20,width:'20%',marginRight:15,backgroundColor:'yellow'}}  icon={() => <Icon name='md-send' size={20} color='blue' />} />
                </View>  
</View>

        </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    },
    subcontainer:{
flex:1,
flexDirection:'column'

    },
    Input:{
        borderRadius:30,
        borderWidth:2,
        margin:20,
        padding:10,
        width:280
    
      
        
    }
})

export default Chatui ;