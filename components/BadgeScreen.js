import React from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";

import Badge from './Badge.js';
import s from './Style.js'
import BadgeConfig from "./BadgeConfig";

const BadgeScreen = () => {
  return (
    <View style={s.container}>
      <BadgeConfig defaultActive='hello' title='Badge..'/>
      <BadgeConfig defaultActive='badgerhinoo' title='Config!'/>
    </View>
  );
};

export default BadgeScreen;
