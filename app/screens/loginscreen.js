import { View,Text,Image,StyleSheet,TextInput, TouchableOpacity, Button} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../assets/logo_final.jpeg'
import extraImage from '../../assets/secondimage.jpg'

function LoginScreen({navigation}){

    function preshandler(){
 navigation.navigate('Registerscreen');
    }

return(<>
    <View style={styles.maincontainer}>
<Image style={styles.logocss}  source={logo} />
<View style={styles.secondcontainer}>
    <Text style={{color:'#DBAEAE' , marginLeft:160, marginTop:15}}>Sign in now</Text>
    <Text style={styles.label}>Phone Number</Text>
    <TextInput
    placeholderTextColor={'black'}
                placeholder ='Enter Phone Number'
                style={styles.input}
                />
          <TouchableOpacity style={styles.button} onPress={preshandler}>
    <Text style={styles.btntext}>CONTINUE</Text>
  </TouchableOpacity>
            <Text style={{marginBottom:40,marginLeft:140,marginTop:10,fontSize:15,fontFamily: 'sans-serif-medium' , color:'black'}}> or Continue with</Text>
<View style={styles.thirdcontainer}>
<Icon style={styles.fbstyle} name='facebook' color='white' size={20} />
<Text style={{fontSize:20,fontFamily: 'sans-serif-medium',marginTop:25,marginLeft:18,color:'white'}}>Facebook</Text>
<Icon style={styles.Googlestyle} name='google' color='white' size={20}  />
<Text style={{fontSize:20,fontFamily: 'sans-serif-medium',marginTop:25,marginLeft:18,color:'white'}}>Google</Text>

        </View>
        
</View>
    </View>

</>)}

const styles = StyleSheet.create({
   maincontainer:{
    backgroundColor:"white",
   },
   secondcontainer:{
    backgroundColor:'white',
height:200,
borderTopLeftRadius:10,
borderTopRightRadius:10,
   },
    label: {
        
        fontWeight: 'bold',
        marginTop: 20,
        fontFamily: 'sans-serif-medium',
        color:'black',
        marginLeft:10,
    },
    input: {
        borderBottomColor:'#DBAEAE',
        borderBottomWidth:2,
        marginBottom:40,
        margin:10,
        height: 40,
        borderColor: 'gray',
        marginTop: 10,
        padding: 5,
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
button:{
    marginBottom:30,
    margin:20,
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
thirdcontainer:{
    marginTop:130,
    flexDirection:"row",
    backgroundColor: '#9A2143',
    height:'100%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
},
fbstyle:{
    marginLeft:20,
    marginTop:30,
},
Googlestyle:{
    marginLeft:115,
    marginTop:30,

}
})

export default LoginScreen