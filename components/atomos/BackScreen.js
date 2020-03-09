import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../../styles';

export default function BackScreen({onBackScreen}) {
  return (
    <TouchableWithoutFeedback onPress={onBackScreen}>
      <Icon
        name="chevron-left"
        type="font-awesome"
        color={Colors.PRIMARY_BLUE}
        style={styles.icon}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 10,
  },
});
