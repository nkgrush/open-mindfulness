import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

import Badge from './Badge.js';
import s from './Style.js'

const exampleOptions = [
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

const BadgeConfig = ({title, options, onActiveChange, defaultActive}) => {
  options = exampleOptions;
  defaultActive = defaultActive ?? options[0].id;
  onActiveChange = onActiveChange ?? ((x) => {});
  const [active, setActive] = useState(defaultActive);

  return (
    <View style={{marginBottom: 20}}>
      <Text style={s.header}>{title}</Text>
      <Text>
        {
          options.map(el => (
            <Badge
              text={el.text}
              key={el.id}
              isActive={el.id == active}
              onPress={() => {
                onActiveChange(el.id);
                setActive(el.id);
              }}
            />
          ))
        }
      </Text>
    </View>
  );
};

export default BadgeConfig;
