import React, {Component} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import RoundedInputs from '../../../components/atomos/RoundedInputs';
import NextButton from '../../../components/atomos/NextButton';
import BackButton from '../../../components/atomos/BackButton';
import {Colors, Typography} from '../../../styles';

class StepThree extends Component {
  constructor(props) {
    const {getState} = props;
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      phoneNumber: getState().phoneNumber ? getState().phoneNumber : '',
      errorLocal: {
        commit: false,
        msg: '',
      },
    };
  }

  nextStep = () => {
    const {phoneNumber} = this.state;
    const {next, saveState} = this.props;
    if (phoneNumber.length > 0) {
      saveState({phoneNumber});
      this.setState({errorLocal: {commit: false, msg: ''}}, () => {
        next();
      });
    } else {
      this.setState({errorLocal: {commit: true, msg: 'Completa los campos'}});
    }
  };

  backStep = () => {
    const {back} = this.props;
    back();
  };

  phoneChange = text => this.setState({phoneNumber: text});

  render() {
    const {phoneNumber, errorLocal} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        {!errorLocal.commit ? (
          <>
            <RoundedInputs
              onChangeHandler={this.phoneChange}
              placeholder="Telefono"
              nameIcon="phone"
              value={phoneNumber}
            />
          </>
        ) : (
          <>
            <RoundedInputs
              onChangeHandler={this.phoneChange}
              placeholder="Telefono"
              nameIcon="phone"
              value={phoneNumber}
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

export default StepThree;
