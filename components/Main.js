import React, { useState } from "react";
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileScreen from './ProfileScreen.js';
import SettingsScreen from './SettingsScreen.js';
import TimerScreen from './TimerScreen.js';
import BadgeScreen from './BadgeScreen.js';
import {ConfigContext, defaultConfig} from './ConfigContext';
import s from './Style';

const Tab = createMaterialTopTabNavigator();
const profileNames = ['1', '2', '3'];

const Main = () => {
  let [config, setConfig] = useState(defaultConfig);

  return (
    <ConfigContext.Provider value={{config, setConfig}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="timer" component={TimerScreen} />
          <Tab.Screen name="badge" component={BadgeScreen} options={{setConfig: setConfig}} />
        </Tab.Navigator>
      </NavigationContainer>
    </ConfigContext.Provider>
  );
};

export default Main;
