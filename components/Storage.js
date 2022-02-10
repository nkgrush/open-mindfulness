import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Storage
const readStorage = async (id, setter, defaultValue) => {
  try {
    const value = await AsyncStorage.getItem(id);
    if (value === null) {
      console.log(`read ${id} set default=${defaultValue}`);
      writeStorage(id, defaultValue);
      setter(defaultValue);
    } else {
      setter(JSON.parse(value));
      console.log(`read ${id} value=${value}`);
    }
  } catch(e) {
    console.error('AsyncStorage error: ', e);
  }
};

const writeStorage = async (id, value) => {
  console.log(`write id=${id}, value=${value}`);
  try {
    await AsyncStorage.setItem(id, JSON.stringify(value));
  } catch (e) {
    console.error('writeStorage:', e);
  }
};

export {readStorage, writeStorage};
