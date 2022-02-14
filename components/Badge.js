import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from "react-native";

const defaultHeight = 20;

const colors = [ 'red', 'mediumslateblue', 'royalblue', 'salmon', 'orange', 'forestgreen'];

const Badge = ({text, fontSize=22, color, onPress, isActive,
                 inactiveColor='lightgrey', textColor='black'}) => {
  color = color ?? colors[Math.floor(Math.random()*colors.length)];
  let [bg, setBg] = useState(color);

  const badgeStyle = {
    backgroundColor: (isActive ? bg : inactiveColor),
    borderRadius: fontSize,
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 2,
  };
  const textStyle = {
    color: textColor,
    fontWeight: isActive ? 'bold' : 'normal',
    fontSize: fontSize,
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={badgeStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Badge;
