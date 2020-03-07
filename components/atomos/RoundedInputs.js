import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../styles/index';

export default function RoundedInputs({placeholder, onChangeHandler}) {
  return (
    <>
      <TextInput
        style={styles.input}
        value={placeholder}
        onChangeText={onChangeHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    color: Colors.LIGHT_BLUE,
    borderRadius: 100,
    width: 350,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 20,
    marginBottom: 20,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 1,
  },
});
