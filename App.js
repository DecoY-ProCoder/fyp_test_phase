import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screen imported

// drawer screens
// import Mainscreen from './app/screens/Home';
// import AboutusScreen from "./app/screens/AboutUsScreen";
// import Portfolioscreen from './app/screens/Portfolio';
// import Myprofilescreen from './app/screens/myProfie';
// import Logoutscreen from './app/screens/logoutScreen';

//default navigation moving between screens 
import SplashScreen from './app/screens/Splashscreen';
import Registerscreen from './app/screens/Registerscreen';
import Otpscreen from './app/screens/Otpscreen';
import LoginScreen from './app/screens/loginscreen';
import Nav from './app/components/drawernavigation';
import Chatui from './app/components/chatUI';

const Stack = createNativeStackNavigator();


export function Route(){
  return(<>
  <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerStyle:{
        backgroundColor:'#e6e6e6'
      }}}>

        
      

        {/* drawerScreen */}
        <Stack.Screen name="Nav" options={{ headerShown: false }} component={Nav} />
        
        {/* Navigation screens */}
        <Stack.Screen  options={{headerShown: false}}  name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{title:''}} name="Otpscreen" component={Otpscreen} />
        <Stack.Screen options={{title:''}} name="Registerscreen" component={Registerscreen} />
        <Stack.Screen name='UISCREEN' component={Chatui} />



      </Stack.Navigator>
    </NavigationContainer>
  </>)
}


function App(){
  
  return(<>
<Route />
  </>)
}

export default App;
