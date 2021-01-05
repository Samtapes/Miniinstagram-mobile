import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';


import Routes from './src/routes';

function App() {
  
  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent"/>
      <Routes/>
    </>
  );
};

export default App;