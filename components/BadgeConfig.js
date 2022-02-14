import React, { useContext, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";

import Badge from './Badge.js';
import {StyleContext} from "./Style";

const BadgeConfig = ({title, fontSize, options, active, onActiveChange,
                       horizontalScroll, inactiveColor='lightgrey', textColor='black'}) => {
  onActiveChange = onActiveChange ?? ((x) => {});
  let s = useContext(StyleContext);

  const content = options.map(el => (
    <Badge
      text={el}
      key={el}
      isActive={el == active}
      onPress={() => {
        onActiveChange(el);
      }}
      fontSize={fontSize}
      inactiveColor={inactiveColor}
      textColor={textColor}
    />
  ));

  return (
    <View style={{marginBottom: 20}}>
      <Text style={s.header}>{title}</Text>
      {horizontalScroll ?
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>{content}</ScrollView> :
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>{content}</View>
      }
    </View>
  );
};

export default BadgeConfig;
