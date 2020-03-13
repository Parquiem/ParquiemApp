import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import RoundedInputs from '../../../components/atomos/RoundedInputs';
import NextButton from '../../../components/atomos/NextButton';
import {Colors, Typography} from '../../../styles';

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      usuario: '',
      email: '',
      errorLocal: false,
    };
  }

  static getDerivedStateFromProps = props => {
    const {getTotalSteps, getCurrentStep} = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };

  nextStep = () => {
    const {usuario, email} = this.state;
    const {next, saveState} = this.props;
    if (usuario.length > 0 && email.length > 0) {
      saveState({usuario, email});
      this.setState({errorLocal: false}, () => {
        next();
      });
    } else {
      this.setState({errorLocal: true});
    }
  };

  userChange = text => this.setState({usuario: text});

  mailChange = text => this.setState({email: text});

  render() {
    const {usuario, email, errorLocal} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        {!errorLocal ? (
          <>
            <RoundedInputs
              onChangeHandler={this.userChange}
              placeholder="Usuarios"
              nameIcon="user"
              value={usuario}
            />
            <RoundedInputs
              onChangeHandler={this.mailChange}
              placeholder="Correo"
              nameIcon="envelope"
              email={email}
            />
          </>
        ) : (
          <>
            <RoundedInputs
              onChangeHandler={this.userChange}
              placeholder="Usuarios"
              nameIcon="user"
              value={usuario}
              error={true}
            />
            <RoundedInputs
              onChangeHandler={this.mailChange}
              placeholder="Correo"
              nameIcon="envelope"
              value={email}
              error={true}
            />
          </>
        )}
        <NextButton handleNext={this.nextStep} style={styles.next} />
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

export default StepOne;
