import React, { useContext } from "react";
import {View, Text} from 'react-native';

import { StyleContext } from "./Style";

const SettingsScreen = () => {
  let {style: s} = useContext(StyleContext);
  return (
    <View style={s.container}>
      <Text style={s.header}>settings</Text>
    </View>
  );
};

export default SettingsScreen;
