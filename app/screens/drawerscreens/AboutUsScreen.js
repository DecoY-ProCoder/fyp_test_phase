import { View,Text,StyleSheet,ScrollView,Image } from "react-native"
import logo from '../../../assets/logo_final.jpg'
import extraImage from '../../../assets/secondimage.jpg'

export default function AboutusScreen({}){

return(
    
<>
<View style={styles.maincontainer}>
<Image style={styles.logocss}  source={logo} />
<Image style={styles.secondlogocss} source={extraImage} />
</View>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.secondcontainer}>
<Text style={{margin:20,fontSize:20 ,color:'black'}}>Who we are ?</Text>
<Text style={{marginLeft:20,marginRight:20,fontSize:15 ,color:'black',padding:1}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
<Text style={{margin:20,fontSize:20 ,color:'black'}}>How we started ?</Text>
<Text style={{marginLeft:20,marginRight:20,fontSize:15 ,color:'black',marginBottom:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
</View>
</ScrollView>

    </>
    )}


const styles = StyleSheet.create({

    maincontainer:{
        backgroundColor:"#F5F6FB",
       },
    
    secondcontainer:{
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:'white',
       },

    logocss:{
        marginTop:30,
        marginLeft:120,
        height:150,
        width:150,
    },
    secondlogocss:{
        marginTop: 40,
        marginLeft:105,
    },

})   
    