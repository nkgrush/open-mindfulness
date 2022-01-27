import React from 'react';
import {View, Text} from 'react-native';

import s from './Style';

const SettingsScreen = () => {
  return (
    <View style={s.container}>
      <Text style={s.header}>settings</Text>
    </View>
  );
};

export default SettingsScreen;
