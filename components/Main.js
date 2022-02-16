import React, { useState, useEffect } from "react";
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TimerScreen from './TimerScreen.js';
import BadgeScreen from './BadgeScreen.js';
import { ConfigContext, defaultConfig, readConfig, sections, writeConfig } from "./ConfigContext";
import { lightTheme, darkTheme, StyleContext, getStyle } from "./Style";
import PushNotification from "react-native-push-notification";
import { readStorage, writeStorage } from "./Storage";

const Tab = createMaterialTopTabNavigator();

const Main = () => {
  let [config, setConfig] = useState(defaultConfig);
  let [theme, setTheme] = useState(darkTheme);
  let [style, setStyle] = useState(getStyle('Dark'));

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    writeConfig(newConfig);
    updateTheme(newConfig.theme);
  };

  const updateTheme = (styleOption) => {
    const style = getStyle(styleOption);
    const theme = styleOption == 'Light' ? lightTheme : darkTheme;
    setStyle(style);
    setTheme(theme);
  };

  useEffect(() => {
    readConfig(setConfig);
    readStorage('config', (config) => {
      setConfig(config);
      updateTheme(config.theme);
    }, defaultConfig);
  }, []);

  return (
    <ConfigContext.Provider value={{config, updateConfig}}>
      <StyleContext.Provider value={style}>
        <NavigationContainer theme={theme}>
          <Tab.Navigator>
            <Tab.Screen name="timer" component={TimerScreen} />
            <Tab.Screen name="badge" component={BadgeScreen} initialParams={{sections}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </StyleContext.Provider>
    </ConfigContext.Provider>
  );
};

export default Main;
