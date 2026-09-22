import React, {createContext, useContext, useState} from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({children}) => {
  const [colourBlindMode, setColourBlindMode] = useState(true);
  const [previewMode, setPreviewMode] = useState('Off');

  const accessibilityColors = {
    Off: {
      primary: '#007DB8',
      secondary: '#8179A7',
      background: '#F8F7FF',
      card: '#FFFFFF',
      text: '#292544',
      mutedText: '#7770A2',
      border: '#DCEAF3',
      accent: '#69CFF2',
      success: '#2E8B57',
      warning: '#E6A000',
      danger: '#E56A00',
    },

    Protan: {
      primary: '#0072B2',
      secondary: '#6A5ACD',
      background: '#F7F9FC',
      card: '#FFFFFF',
      text: '#1F2937',
      mutedText: '#4B5563',
      border: '#CBD5E1',
      accent: '#56B4E9',
      success: '#009E73',
      warning: '#E69F00',
      danger: '#D55E00',
    },

    Deuter: {
      primary: '#0072B2',
      secondary: '#6A5ACD',
      background: '#F7F9FC',
      card: '#FFFFFF',
      text: '#1F2937',
      mutedText: '#4B5563',
      border: '#CBD5E1',
      accent: '#56B4E9',
      success: '#009E73',
      warning: '#E69F00',
      danger: '#D55E00',
    },

    Tritan: {
      primary: '#0057B8',
      secondary: '#8A3FFC',
      background: '#F8F9FC',
      card: '#FFFFFF',
      text: '#202124',
      mutedText: '#4A5568',
      border: '#CBD5E1',
      accent: '#00A6A6',
      success: '#009E73',
      warning: '#E69F00',
      danger: '#D55E00',
    },
  };

  const colors =
    colourBlindMode && previewMode !== 'Off'
      ? accessibilityColors[previewMode]
      : accessibilityColors.Off;

  return (
    <AccessibilityContext.Provider
      value={{
        colourBlindMode,
        setColourBlindMode,
        previewMode,
        setPreviewMode,
        colors,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  return useContext(AccessibilityContext);
};