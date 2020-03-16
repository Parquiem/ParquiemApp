import React, {Component} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import RoundedInputs from '../../components/atomos/RoundedInputs';
import RoundedInputPassword from '../../components/atomos/RoundedInputPassword';
import NextButton from '../../components/atomos/NextButton';
import {Colors, Typography} from '../../styles/index';
import {login} from '../../actions/authActions';
import {connect} from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errorLocal: {
      commit: false,
      msg: '',
    },
    errors: {},
  };

  userChange = text => {
    this.setState({email: text});
  };

  passwordChange = text => {
    this.setState({password: text});
  };

  submit = () => {
    const {email, password} = this.state;
    if (email.length > 0 && password.length > 0) {
      this.props.login({email, password});
      console.log('Login');
    } else {
      this.setState({errorLocal: {commit: true, msg: 'Complete los campos'}});
    }
  };

  render() {
    const {email, password, errorLocal} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        {!errorLocal.commit ? (
          <>
            <RoundedInputs
              onChangeHandler={this.userChange}
              placeholder="Correo"
              nameIcon="user"
              value={email}
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
              placeholder="Correo"
              nameIcon="user"
              value={email}
              error={true}
            />
            <RoundedInputPassword
              onChangeHandler={this.passwordChange}
              placeholder="Contraseña"
              nameIcon="lock"
              value={password}
              error={true}
            />
            <Text style={styles.txtErr}>{errorLocal.msg}</Text>
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
  txtErr: {
    fontSize: 12,
    color: Colors.STATE_ERROR,
    marginBottom: 10,
    marginLeft: 40,
  },
});

export default connect(
  null,
  {login},
)(Login);
