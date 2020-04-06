import React from 'react';
import {Typography} from '../../styles';
import {Text, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default function MenuItem({texto, icono, handlePress}) {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.textContainer}>
        <View style={styles.icono}>
          <Icon size={20} name={icono} type="font-awesome" />
        </View>
        <Text style={styles.menuItem}>{texto}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    marginBottom: 30,
  },
  textContainer: {
    flexDirection: 'row',
  },
  icono: {
    alignItems: 'flex-start',
    width: 50,
    marginRight: 10,
  },
});
