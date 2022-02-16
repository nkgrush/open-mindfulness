import React from 'react';
import {writeStorage, readStorage} from './Storage';

const sections = {
  theme: {
    title: 'Theme',
    options: ['Light', 'Dark', 'Adaptive'],
  },
  timer: {
    title: 'Timer alarm',
    options: ['Vibration', 'Just sound', 'Ignore Silent mode'],
  },
  notifications: {//TODO
    title: 'Notifications',
    options: ['Send', "Don't send"],
  },
};

let defaultConfig = {};
for (let key in sections) {
  defaultConfig[key] = sections[key].options[0];
}


let ConfigContext = React.createContext(defaultConfig);

// Storage
const readConfig = async (setConfig) => (
  await readStorage('config', setConfig, defaultConfig));

const writeConfig = async (value) => writeStorage('config', value);

export {defaultConfig, ConfigContext, sections, readConfig, writeConfig};
