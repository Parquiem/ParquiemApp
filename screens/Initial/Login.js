import React, {Component} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import RoundedInputs from '../../components/atomos/RoundedInputs';
import RoundedInputPassword from '../../components/atomos/RoundedInputPassword';
import NextButton from '../../components/atomos/NextButton';
import {Colors, Typography} from '../../styles/index';
import {Navigation} from 'react-native-navigation';

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorLocal: false,
    errors: {},
  };

  userChange = text => {
    this.setState({username: text});
  };

  passwordChange = text => {
    this.setState({password: text});
  };

  submit = () => {
    const {username, password} = this.state;
    if (username.length > 0 && password.length > 0) {
      // TODO: Llamar el action que envia datos a la API para recibir feedback
      console.log('Login');
    } else {
      this.setState({errorLocal: true});
    }
  };

  render() {
    const {username, password, errorLocal} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        {!errorLocal ? (
          <>
            <RoundedInputs
              onChangeHandler={this.userChange}
              placeholder="Usuario"
              nameIcon="user"
              value={username}
            />
            <RoundedInputPassword
              onChangeHandler={this.passwordChange}
              placeholder="Contraseña"
              nameIcon="lock"
              value={password}
            />
          </>
        ) : (
          <>
            <RoundedInputs
              onChangeHandler={this.userChange}
              placeholder="Usuario"
              nameIcon="user"
              value={username}
              error={true}
            />
            <RoundedInputPassword
              onChangeHandler={this.passwordChange}
              placeholder="Contraseña"
              nameIcon="lock"
              value={password}
              error={true}
            />
          </>
        )}
        <NextButton handleNext={this.submit} style={styles.next} />
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
