import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import RoundedInputs from '../../../components/atomos/RoundedInputs';
import NextButton from '../../../components/atomos/NextButton';
import {Colors, Typography} from '../../../styles';
import {Navigation} from 'react-native-navigation';

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      usuario: '',
      email: '',
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
    const {next} = this.props;

    next();
  };

  userChange = text => {
    this.setState({usuario: text});
  };

  mailChange = text => {
    this.setState({email: text});
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        <RoundedInputs
          placeholder="Usuarios"
          nameIcon="user"
        />
        <RoundedInputs
          placeholder="Correo"
          nameIcon="envelope"
        />
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
