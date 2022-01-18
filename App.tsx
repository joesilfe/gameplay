import React from 'react';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import AppLoading from 'expo-app-loading'; 'expo-app-loading';
import { StatusBar, LogBox, Text } from 'react-native';

import { theme } from './src/global/styles/theme';

import { Background } from './src/layout/background';
import { Routes } from './src/routes';

import { AppContextProvider } from './src/context/appContextProvider';



export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }



  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.colors.secondary80}
        translucent={true}
      />
        <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </Background>
  );
}

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine'])