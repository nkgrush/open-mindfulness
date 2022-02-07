import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";

import BackgroundTimer from 'react-native-background-timer';

import s from './Style';

const margin = 16;

const Circle = ({children, color, extraMargin= 0}) => {
  let diam = `${100-extraMargin}%`;

  return <View style={{
    width: diam,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 2000,
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
    initialTime = 2*60,
    hideStatusBar = true,
    bgColor = 'white',
    fgColor = 'red';

  let [time, setTime] = useState(initialTime);
  let [isRunning, setIsRunning] = useState(false);

  let mm = String(Math.floor(time/60)).padStart(2, '0');
  let ss = String(Math.floor(time % 60)).padStart(2, '0');
  let display = `${mm}:${ss}`;

  useEffect(() => {
    if (isRunning) {
      let start = Date.now();
      BackgroundTimer.runBackgroundTimer(() => {
        let delta = Date.now() - start;
        let seconds = initialTime - Math.floor(delta / 1000);
        if (seconds >= 0) {
          setTime(seconds);
        } else {
          setTime(0);
          setIsRunning(false);
        }
      },200);
      return () => BackgroundTimer.stopBackgroundTimer();
    } else {
      /* Timer cleaned by useEffect return */
    }
  }, [isRunning]);

  return (
    <View style={[styles.container, s.container]}>
      <StatusBar hidden={true}/>
      <TouchableOpacity onPress={() => {
        setIsRunning(!isRunning);
        setTime(initialTime);
      }} >
        <Circle color='red'>
          <Circle color='white' extraMargin={5}>
            <View style={{height: '70%', width: '85%', justifyContent: 'center'}}>
              <Text adjustsFontSizeToFit={true} style={[s.header, styles.numbers]}>{display}</Text>
            </View>
          </Circle>
        </Circle>
      </TouchableOpacity>
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
