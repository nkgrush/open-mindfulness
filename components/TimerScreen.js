import React, { useContext, useEffect, useState } from "react";
import { View, Text, StatusBar, StyleSheet, useWindowDimensions, TouchableOpacity, Modal } from "react-native";

import BackgroundTimer from 'react-native-background-timer';
import PushNotification from "react-native-push-notification";

import s from './Style';
import {TimeInput, secondsToString } from "./TimeInput";
import {readStorage, writeStorage} from "./Storage";
import { ConfigContext } from "./ConfigContext";

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

  let {config, updateConfig} = useContext(ConfigContext);

  const
    hideStatusBar = true,
    bgColor = 'white',
    fgColor = 'red';

  let [initialTime, setInitialTime] = useState(60*2);
  let [time, setTime] = useState(initialTime);
  let [isRunning, setIsRunning] = useState(false);
  let [modal, setModal] = useState(false);

  let display = secondsToString(time);

  useEffect(() => {
    readStorage('initialTime', setInitialTime, 60*2);
  }, []);

  useEffect(() => {
    if (isRunning) {
      let start = Date.now();
      BackgroundTimer.runBackgroundTimer(() => {
        let delta = Date.now() - start;
        let seconds = initialTime - Math.floor(delta / 1000);
        if (seconds >= 0) {
          setTime(seconds);
        } else {
          setTime(initialTime);
          setIsRunning(false);

          const channelId = {
            'Vibration': 'vibration',
            'Just sound': 'sound',
            'Ignore Silent mode': 'alarm',
          }[config.timer];

          console.log(channelId)

          PushNotification.localNotification({
            channelId: channelId,
            title: "Time's up!",
            message: "That's all.",
            timeoutAfter: 2000,
          });
        }
      },200);
      return () => {
        BackgroundTimer.stopBackgroundTimer();
      };
    } else {
      /* Timer cleaned by useEffect return */
      setTime(initialTime);
    }
  }, [isRunning, initialTime]);

  return (
    <View style={[styles.container, s.container]}>
      <StatusBar hidden={true}/>
      <Modal
        transparent
        visible={modal}
        statusBarTranslucent
        animated
        animationType={'fade'}
      >
        <TimeInput
          initialSeconds={initialTime}
          setResult={(val) => {
            setInitialTime(val);
            writeStorage('initialTime', val);
          }}
          hideModal={() => setModal(false)}/>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setIsRunning(!isRunning);
          setTime(initialTime);
        }}
        delayLongPress={300}
        onLongPress={() => {
          setIsRunning(false);
          setModal(true);
        }}
      >
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
  },
})

export default ProfileScreen;
