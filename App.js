import React from 'react';
import {StatusBar} from 'react-native';
import OpeningScreen from './src/screens/OnboardingScreen/OpeningScreen';
import './global.css';

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8F7FF"
      />

      <OpeningScreen />
    </>
  );
}

export default App;