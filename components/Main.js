import React, { useState, useEffect } from "react";
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProfileScreen from './ProfileScreen.js';
import SettingsScreen from './SettingsScreen.js';
import TimerScreen from './TimerScreen.js';
import BadgeScreen from './BadgeScreen.js';
import { ConfigContext, defaultConfig, readConfig, sections, writeConfig } from "./ConfigContext";
import s from './Style';

const Tab = createMaterialTopTabNavigator();
const profileNames = ['1', '2', '3'];

const Main = () => {
  let [config, setConfig] = useState(defaultConfig);

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    writeConfig(newConfig);
  };


  useEffect(() => {
    readConfig(setConfig);
  }, [])

  return (
    <ConfigContext.Provider value={{config, updateConfig}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="timer" component={TimerScreen} />
          <Tab.Screen name="badge" component={BadgeScreen} initialParams={{sections}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ConfigContext.Provider>
  );
};

export default Main;
