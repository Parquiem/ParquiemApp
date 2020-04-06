import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icomoonConfig from '../../selection.json';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles';

const Icon = createIconSetFromIcoMoon(icomoonConfig);

export default function HamburguerButton({handleMenu}) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handleMenu}>
      <Icon name="menu" size={15} color={Colors.DARK_BLUE} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.WHITE,
    padding: 3,
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderRadius: 50,
  },
});
