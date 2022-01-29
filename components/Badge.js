import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from "react-native";

const defaultHeight = 20;

const colors = [ 'red', 'gold', 'greenyellow', 'mediumslateblue', 'royalblue', 'salmon', 'orange', 'pink', 'yellowgreen' ];

const Badge = ({text, fontSize=22, color='red', onPress, isActive}) => {
  let [bg, setBg] = useState(colors[Math.floor(Math.random()*colors.length)]);

  const badgeStyle = {
    backgroundColor: (isActive ? bg : 'lightgrey'),
    borderRadius: fontSize,
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 2,
  };
  const textStyle = {
    color: 'black',
    fontWeight: isActive ? 'bold' : 'normal',
    fontSize: fontSize,
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={badgeStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Badge;
