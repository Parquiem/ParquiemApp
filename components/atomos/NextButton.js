import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../../styles';

export default function NextButton({handleNext}) {
  return (
    <>
      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Icon name="arrow-right" type="font-awesome" color={Colors.WHITE} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: Colors.PRIMARY_BLUE,
    justifyContent: 'center',
    borderRadius: 100,
    width: 120,
    alignItems: 'flex-end',
    paddingRight: 15,
    alignSelf: 'flex-end',
    marginRight: 30,
  },
});
