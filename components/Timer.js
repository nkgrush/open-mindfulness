import React from 'react';
import { View, Text, StatusBar, StyleSheet, useWindowDimensions} from "react-native";

import s from './Style';

const margin = 16;

const Circle = ({children, color, extraMargin= 0}) => {
  var { height, width } = useWindowDimensions();
  let diam = Math.min(height, width) - margin*2 - extraMargin;

  return <View style={{
    width: diam,
    height: diam,
    borderRadius: diam/2,
    backgroundColor: color,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }}>
    {children}
  </View>;
};

const ProfileScreen = ({route}) => {
  //const {time} = route.params;
  const
    time = 5*60,
    hideStatusBar = true,
    bgColor = 'white',
    fgColor = 'red';

  let mm = String(Math.floor(time/60)).padStart(2, '0');
  let ss = String(Math.floor(time % 60)).padStart(2, '0');
  let display = `${mm}:${ss}`;

  return (
    <View style={[styles.container, s.container]}>
      <Circle color='red'>
        <Circle color='white' extraMargin={30}>
          <View style={{height: '70%', width: '85%', justifyContent: 'center'}}>
            <Text adjustsFontSizeToFit={true} style={[s.header, styles.numbers]}>{display}</Text>
          </View>
        </Circle>
      </Circle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  numbers: {
    fontSize: 128,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  }
})

export default ProfileScreen;
