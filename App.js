import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/drawer';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndData() {
      try {
        // Load custom fonts
        await Font.loadAsync({
          'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
          'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
          'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
        });
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen once fonts are loaded
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndData();
  }, []);

  if (!fontsLoaded) {
    return null; // Keep the splash screen visible while loading
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigator />
    </NavigationContainer>
  );
}
