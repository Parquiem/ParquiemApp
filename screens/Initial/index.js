import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RoundedButton from '../../components/atomos/RoundedButton';

const {height, width} = Dimensions.get('screen');

class Initial extends Component {
  render() {
    return (
      <>
        <View style={{padding: 40}}>
          <View>
            <Text>Parquiem</Text>
            <RoundedButton text="Iniciar Sesión" />
            <RoundedButton text="Registrarse" />
            <Text>Parquiem v1.0</Text>
          </View>
        </View>
      </>
    );
  }
}

export default Initial;
