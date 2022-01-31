import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";

import Badge from './Badge.js';
import s from './Style.js'
import BadgeConfig from "./BadgeConfig";
import {ConfigContext} from "./ConfigContext";

let dummySections = {
  badge: 'Badge..',
  option1: 'Config 🎉',
}

const BadgeScreen = ({navigation, route, defaultConfig, sections}) => {
  sections = dummySections; //FIXME

  let {config, setConfig} = useContext(ConfigContext);

  let setter = (key) => (
      (val) => { setConfig({...config, [key]: val});});

  let data = Object.keys(sections)
    .map((id) => ({id: id, title: sections[id], active: config[id]}));

  return (
    <View style={s.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <BadgeConfig
            title={item.title}
            active={item.active}
            onActiveChange={setter(item.id)}
          />)}
      />
    </View>
  );
};

export default BadgeScreen;
