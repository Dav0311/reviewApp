import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
import {AppLoading } from 'expo';
import { useState } from 'react';
import Navigator from './routes/drawer';



//load the fonts 
const getFonts = () => {
  return Font.loadAsync({
    'poppins-regular':require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold':require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-thin':require('./assets/fonts/Poppins-Thin.ttf'),
  });
};


export default function App() {
  //cheching whether the async fonts are loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
     return(
      <AppLoading
        startAsync={getFonts}
        onFinish = {
          () => setFontsLoaded(true)
        }
      />
     );
  }

}


