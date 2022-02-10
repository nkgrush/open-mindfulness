import React from 'react';
import {writeStorage, readStorage} from './Storage';

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
const readConfig = async (setConfig) => (
  await readStorage('config', setConfig, defaultConfig));

const writeConfig = async (value) => writeStorage('config', value);

export {defaultConfig, ConfigContext, sections, readConfig, writeConfig};
