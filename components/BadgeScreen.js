import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList} from "react-native";

import Badge from './Badge.js';
import s from './Style.js'
import BadgeConfig from "./BadgeConfig";
import {ConfigContext} from "./ConfigContext";

const dummyOptions = [
  {text: 'Text', id: 'id'},
  {text: 'hellouu', id: 'hello'},
  {text: 'my name', id: 'name'},
  {text: 'is fancy', id: 'fancy'},
  {text: 'badgerhinoo', id: 'badgerhinoo'},
  {text: 'hellouu', id: 'h1'},
  {text: 'hellouu', id: 'h2'},
  {text: 'hellouu', id: 'h3'},
  {text: 'hellouu', id: 'h4'},
]

let dummySections = {
  badge: {title: 'Badge..', options: dummyOptions},
  option1: {title: 'Config 🎉', options: dummyOptions},
}

const BadgeScreen = ({route}) => {
  let {config, updateConfig} = useContext(ConfigContext);
 // let sections = route.params.sections;
  let sections = dummySections

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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        ListHeaderComponent={
          <BadgeConfig
            fontSize={28}
            title='Profiles'
            active={1}
            horizontalScroll={true}
            options={[
              {text: 'One', id: 1, color: 'red'},
              {text: 'two', id: 2},
              {text: 'three', id: 3},
              {text: 'four', id: 4},
              {text: 'five', id: 5},
              {text: 'six', id: 6},
            ]}
          />
        }
        renderItem={({item}) => (
          <BadgeConfig
            title={item.title}
            active={item.active}
            onActiveChange={setter(item.id)}
            options={item.options}
          />)}
      />
    </View>
  );
};

export default BadgeScreen;
