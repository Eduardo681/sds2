import React from 'react';
import Routes from './src/routes';
import {useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans'
import AppLoading from 'expo-app-loading';
const App = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular, OpenSans_700Bold
  })
  if(!fontsLoaded){
    return <AppLoading />
  }
  return <>
      <Routes />
  </>;
};
export default App;
