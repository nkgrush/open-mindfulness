import React from 'react';
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileScreen from './ProfileScreen.js';
import SettingsScreen from './SettingsScreen.js';
import s from './Style';

const Tab = createMaterialTopTabNavigator();
const profileNames = ['1', '2', '3'];

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {profileNames.map(i =>
            <Tab.Screen
              name={i}
              key={i}
              component={ProfileScreen}
              initialParams={{ profileName: i }}
            />
        )}
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
