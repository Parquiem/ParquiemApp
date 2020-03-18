import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export default function SideMenu() {
  return (
    <View style={styles.background}>
      <Text>Sidemenu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
});
