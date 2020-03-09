import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RoundedInputs from '../atomos/RoundedInputs';
import {Colors, Typography} from '../../styles/index';

class Login extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <>
        <View style={styles.container}>
          <RoundedInputs placeholder="Usuario" />
          <RoundedInputs placeholder="Contraseña" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});

export default Login;
