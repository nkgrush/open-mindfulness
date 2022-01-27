import React from 'react';
import { View, Text, StatusBar } from "react-native";

import s from './Style';

const ProfileScreen = ({route}) => {
  const {profileName} = route.params;
  return (
    <View style={s.container}>
      <StatusBar />
      <View style={s.textContainer}>
        <Text style={s.header}>Profile: {profileName}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
