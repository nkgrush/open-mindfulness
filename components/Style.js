import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styleLight = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalCard: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 24,
    backgroundColor: 'red'
  },
  modalHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  modalTime: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 10,
  },
});

export default styleLight;
