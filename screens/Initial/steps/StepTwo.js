import React, {Component} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import RoundedInputPassword from '../../../components/atomos/RoundedInputPassword';
import NextButton from '../../../components/atomos/NextButton';
import BackButton from '../../../components/atomos/BackButton';
import {Colors, Typography} from '../../../styles';

class StepTwo extends Component {
  constructor(props) {
    const {getState} = props;
    super(props);
    this.state = {
      password: getState().password ? getState().password : '',
      password2: getState().password2 ? getState().password2 : '',
      errorLocal: {
        commit: false,
        msg: '',
      },
    };
  }

  nextStep = () => {
    const {password, password2} = this.state;
    const {next, saveState} = this.props;
    if (password.length > 0 && password2.length > 0) {
      if (password !== password2) {
        this.setState({
          errorLocal: {commit: true, msg: 'Las contraseñas no coinciden'},
        });
      } else {
        saveState({password, password2});
        this.setState({errorLocal: {commit: false, msg: ''}}, () => {
          next();
        });
      }
    } else {
      this.setState({errorLocal: {commit: true, msg: 'Completa los campos'}});
    }
  };

  backStep = () => {
    const {back} = this.props;
    back();
  };

  passwordChange = text => this.setState({password: text});

  password2Change = text => this.setState({password2: text});

  render() {
    const {password, password2, errorLocal} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        {!errorLocal.commit ? (
          <>
            <RoundedInputPassword
              onChangeHandler={this.passwordChange}
              placeholder="Contraseña"
              nameIcon="lock"
              value={password}
            />
            <RoundedInputPassword
              onChangeHandler={this.password2Change}
              placeholder="Repetir Contraseña"
              nameIcon="lock"
              value={password2}
            />
          </>
        ) : (
          <>
            <RoundedInputPassword
              onChangeHandler={this.passwordChange}
              placeholder="Contraseña"
              nameIcon="lock"
              value={password}
              error={true}
            />
            <RoundedInputPassword
              onChangeHandler={this.password2Change}
              placeholder="Repetir Contraseña"
              nameIcon="lock"
              value={password2}
              error={true}
            />
            <Text style={styles.txtErr}>{errorLocal.msg}</Text>
          </>
        )}
        <View style={styles.buttons}>
          <BackButton handleBack={this.backStep} style={styles.next} />
          <NextButton handleNext={this.nextStep} style={styles.next} />
        </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtErr: {
    fontSize: 12,
    color: Colors.STATE_ERROR,
    marginBottom: 10,
    marginLeft: 40,
  },
});

export default StepTwo;
