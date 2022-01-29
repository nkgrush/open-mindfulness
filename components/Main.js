import React from 'react';
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileScreen from './ProfileScreen.js';
import SettingsScreen from './SettingsScreen.js';
import TimerScreen from './TimerScreen.js';
import BadgeScreen from './BadgeScreen.js';
import s from './Style';

const Tab = createMaterialTopTabNavigator();
const profileNames = ['1', '2', '3'];

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="timer" component={TimerScreen} />
        <Tab.Screen name="badge" component={BadgeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
