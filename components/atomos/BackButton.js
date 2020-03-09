import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../../styles';

export default function BackButton({handleBack}) {
  return (
    <>
      <TouchableOpacity onPress={handleBack} style={styles.button}>
        <Icon name="arrow-left" type="font-awesome" color={Colors.WHITE} />
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
    alignItems: 'flex-start',
    paddingLeft: 15,
    alignSelf: 'flex-end',
    marginLeft: 30,
  },
});
