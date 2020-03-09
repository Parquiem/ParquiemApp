import React, {Component} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import RoundedInputs from '../../components/atomos/RoundedInputs';
import NextButton from '../../components/atomos/NextButton';
import {Colors, Typography} from '../../styles/index';
import {Navigation} from 'react-native-navigation';

class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        {/* <BackScreen onBackScreen={this.handleBackScreen} /> */}
        <Text style={styles.title}>Parquiem</Text>
        <RoundedInputs placeholder="Usuario" nameIcon="user" />
        <RoundedInputs placeholder="Contraseña" nameIcon="lock" />
        <NextButton style={styles.next} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 25,
    backgroundColor: Colors.DARKER_WHITE,
  },
  title: {
    color: Colors.PRIMARY_BLUE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_48,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    marginBottom: 50,
    textAlign: 'center',
  },
  versionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  versionText: {
    color: Colors.GRAY,
    paddingBottom: 15,
  },
});

export default Login;
