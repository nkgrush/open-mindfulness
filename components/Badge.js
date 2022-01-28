import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, TouchableHighlight, TouchableOpacity } from "react-native";

const defaultHeight = 20;

const colors = [ 'red', 'gold', 'greenyellow', 'mediumslateblue', 'royalblue', 'salmon', 'orange', 'pink', 'yellowgreen' ];

const Badge = ({text, height=40, color='red', onPress, isActive}) => {
  let [bg, setBg] = useState(colors[Math.floor(Math.random()*colors.length)]);

  const badgeStyle = {
    backgroundColor: (isActive ? bg : 'lightgrey'),
    borderRadius: height/2,
    height: height,
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 2,
  };
  const textStyle = {
    color: 'black',
    fontWeight: isActive ? 'bold' : 'normal',
    fontSize: 100,
  }
  return (
    <TouchableOpacity onPressIn={onPress}>
      <View style={badgeStyle}>
        <Text adjustsFontSizeToFit={true} style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Badge;
