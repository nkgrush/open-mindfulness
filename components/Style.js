import React from 'react';
import {Text, StyleSheet} from 'react-native';

import { readStorage } from "./Storage";

import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    modalText: 'white',
    inactive: 'lightgrey',
  }
}

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'red',
    modalText: 'white',
    inactive: '#202020',
  }
}

const getStyle = (styleConfig) => {
  switch (styleConfig) {
    case 'Light':
      return styleFromTheme(lightTheme);
    case 'Dark':
      return styleFromTheme(darkTheme);
    case 'Adaptive':
      const hours = new Date().getHours();
      return (hours > 6 && hours < 20) ? styleFromTheme(lightTheme) : styleFromTheme(darkTheme);
    default:
      console.warn('at getStyle, defaulting to ', styleConfig);
      return styleFromTheme(lightTheme);
  }
};

const styleFromTheme = (theme, config) => {
  return StyleSheet.create({
    header: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.colors.text,
      textAlign: 'center',
    },
    container: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    modalCard: {
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      borderRadius: 24,
      backgroundColor: theme.colors.primary,
    },
    modalHeader: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.colors.modalText,
      textAlign: 'center',
      fontFamily: 'monospace',
    },
    modalTime: {
      fontSize: 60,
      fontWeight: 'bold',
      color: theme.colors.modalText,
      textAlign: 'center',
      letterSpacing: 10,
    },
  });
};

const StyleContext = React.createContext(getStyle('Light'));

export {lightTheme, darkTheme, getStyle, StyleContext};
