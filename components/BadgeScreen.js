import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList, StatusBar } from "react-native";

import Badge from './Badge.js';
import { StyleContext } from "./Style.js";
import BadgeConfig from "./BadgeConfig";
import {ConfigContext, sections} from "./ConfigContext";
import { useTheme } from "@react-navigation/native";

const BadgeScreen = ({route}) => {
  let {config, updateConfig} = useContext(ConfigContext);
 // let sections = route.params.sections;
  let s = useContext(StyleContext);
  let theme = useTheme();

  let setter = (key) => (
      (val) => {
        updateConfig({ ...config, [key]: val });
      });

  let data = Object.keys(sections)
    .map((id) => ({
      id: id,
      title: sections[id].title,
      active: config[id],
      options: sections[id].options,
    }));

  return (
    <View style={s.container}>
      <StatusBar hidden={true}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <BadgeConfig
            title={item.title}
            active={item.active}
            onActiveChange={setter(item.id)}
            options={item.options}
            inactiveColor={theme.colors.inactive}
            textColor={theme.colors.text}
          />)}
      />
    </View>
  );
};

export default BadgeScreen;
