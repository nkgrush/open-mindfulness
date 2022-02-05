import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

// React context

let defaultConfig = {
  badge: 'hello',
  option1: 'badgerhinoo',
}

let sections = {
  badge: 'BadgeS..',
  option1: 'Config!🎉',
}

let ConfigContext = React.createContext(defaultConfig);

// Storage
const readConfig = async (setConfig) => {
  console.log('read config');
  try {
    const value = await AsyncStorage.getItem('config');
    if (value === null) {
      writeConfig(defaultConfig);
      console.log('set default config');
    } else {
      setConfig(JSON.parse(value));
      console.log('read config', value);
    }
  } catch(e) {
    console.error('AsyncStorage error: ', e);
  }
};

const writeConfig = async (value) => {
  console.log('write config');
  try {
    await AsyncStorage.setItem('config', JSON.stringify(value));
  } catch (e) {
    console.error('writeConfig:', e);
  }
}

export {defaultConfig, ConfigContext, sections, readConfig, writeConfig};
