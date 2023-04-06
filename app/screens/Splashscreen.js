import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';


const SplashScreen = ({ navigation }) => {
  
  
  useEffect(() => {

    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
      <Image
        source={require('../../assets/splashscreen.png')}
        style={styles.splash}
      />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width:390,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  splash: {
    height: 800,
    width: 900,
    resizeMode: 'contain',
  },
});

export default SplashScreen;