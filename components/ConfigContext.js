import React from 'react';

let defaultConfig = {
  badge: 'hello',
  option1: 'badgerhinoo',
}

let ConfigContext = React.createContext(defaultConfig);


export {defaultConfig, ConfigContext};
