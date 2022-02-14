import React, { useContext, useState } from "react";

import VirtualKeyboard from 'react-native-virtual-keyboard';
import backspace from '../backspace.png';

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import { StyleContext } from "./Style";

const inputToSeconds = (text) => {
  if (!text) return 60*2;
  if (text.length <= 2) return parseInt(text);
  return 60 * parseInt(text.slice(0, text.length - 2)) + parseInt(text.slice(-2));
};

const inputToText = (text) => {
  if (!text) return '00:00';
  let mm, ss;
  if (text.length <= 2) {
    mm = '00';
    ss = text.padStart(2, '0');
  } else {
    mm = text.slice(0, text.length - 2).padStart(2, '0');
    ss = text.slice(-2).padStart(2, '0');
  }
  return `${mm}:${ss}`;
};

const secondsToString = (secs) => {
  let mm = String(Math.floor(secs/60)).padStart(2, '0');
  let ss = String(Math.floor(secs % 60)).padStart(2, '0');
  return `${mm}:${ss}`;
};

const secondsToInput = (secs) => {
  let mm = String(Math.floor(secs/60)).padStart(2, '0');
  let ss = String(Math.floor(secs % 60)).padStart(2, '0');
  return mm + ss;
};

const TimeInput = ({hideModal, initialSeconds, setResult}) => {
  let [input, setInput] = useState(secondsToInput(initialSeconds));
  let s = useContext(StyleContext);

  return (
    <TouchableOpacity
      onPress={() => {
        setResult(inputToSeconds(input));
        hideModal();
      }}
      activeOpacity={1}
      style={[s.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}
    >
      <TouchableWithoutFeedback>
          <View style={s.modalCard}>
            <TouchableOpacity
              onPress={() => {
                setResult(inputToSeconds(input));
                hideModal();
              }} activeOpacity={1}
            >
              <Text style={s.modalHeader}>mm:ss</Text>
              <Text style={s.modalTime}>{inputToText(input)}</Text>
            </TouchableOpacity>
            <VirtualKeyboard clearOnLongPress color="white" pressMode="string"
                             backspaceImg={backspace} textStyle={{fontSize: 50}} onPress={(val) => setInput(val.replace(/^0+/, ''))}/>
          </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

export {TimeInput, secondsToString};
