import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import RoundedInputs from '../../../components/atomos/RoundedInputs';
import NextButton from '../../../components/atomos/NextButton';
import {Colors, Typography} from '../../../styles';

class StepOne extends Component {
  constructor(props) {
    const {getState} = props;
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      name: getState().name ? getState().name : '',
      email: getState().email ? getState().email : '',
      errorLocal: {
        commit: false,
        msg: '',
      },
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
    const {name, email} = this.state;
    const {next, saveState} = this.props;
    if (name.length > 0 && email.length > 0) {
      saveState({name, email});
      this.setState({errorLocal: {commit: false, msg: ''}}, () => {
        next();
      });
    } else {
      this.setState({errorLocal: {commit: true, msg: 'Completa los campos'}});
    }
  };

  userChange = text => this.setState({name: text});

  mailChange = text => this.setState({email: text});

  render() {
    const {name, email, errorLocal} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        {!errorLocal.commit ? (
          <>
            <RoundedInputs
              onChangeHandler={this.userChange}
              placeholder="Nombre"
              nameIcon="user"
              value={name}
            />
            <RoundedInputs
              onChangeHandler={this.mailChange}
              placeholder="Correo"
              nameIcon="envelope"
              value={email}
            />
          </>
        ) : (
          <>
            <RoundedInputs
              onChangeHandler={this.userChange}
              placeholder="Nombre"
              nameIcon="user"
              value={name}
              error={true}
            />
            <RoundedInputs
              onChangeHandler={this.mailChange}
              placeholder="Correo"
              nameIcon="envelope"
              value={email}
              error={true}
            />
            <Text style={styles.txtErr}>{errorLocal.msg}</Text>
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
  txtErr: {
    fontSize: 12,
    color: Colors.STATE_ERROR,
    marginBottom: 10,
    marginLeft: 40,
  },
});

export default StepOne;
