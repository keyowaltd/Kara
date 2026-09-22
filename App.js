import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import OpeningScreen from './src/screens/OnboardingScreen/OpeningScreen';
import ColorblindRequest from './src/screens/OnboardingScreen/ColorblindRequest';

import {AccessibilityProvider} from './src/context/AccessibilityContext';

import './global.css';

function App() {
  const [showColorblindRequest, setShowColorblindRequest] = useState(false);

  return (
    <AccessibilityProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F6FD"
      />

      {showColorblindRequest ? (
        <ColorblindRequest />
      ) : (
        <OpeningScreen
          onComplete={() => setShowColorblindRequest(true)}
        />
      )}
    </AccessibilityProvider>
  );
}

export default App;