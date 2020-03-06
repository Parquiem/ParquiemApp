import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {Typography} from '../../styles/index';

export default function RoundedButton({bg, color, text, shadow}) {
  return (
    <TouchableHighlight
      style={[
        styles.btn,
        {
          backgroundColor: bg,
          ...shadow,
        },
      ]}>
      <Text style={[styles.btnText, {color}]}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    width: 300,
    paddingTop: 15,
    paddingBottom: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  }
});
