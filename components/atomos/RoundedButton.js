import React from 'react';
import {Text, Button, TouchableHighlight, StyleSheet} from 'react-native';

export default function RoundedButton(props) {
  return (
    <TouchableHighlight>
      <Text>{props.text}</Text>
    </TouchableHighlight>
  );
}
