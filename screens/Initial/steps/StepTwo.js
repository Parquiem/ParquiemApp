import React, {Component} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import RoundedInputs from '../../../components/atomos/RoundedInputs';
import NextButton from '../../../components/atomos/NextButton';
import BackButton from '../../../components/atomos/BackButton';
import {Colors, Typography} from '../../../styles';
import {Navigation} from 'react-native-navigation';

class StepTwo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: '',
    password: '',
    errors: {},
  };

  nextStep = () => {
    const {next} = this.props;
    next();
  };

  backStep = () => {
    const {back} = this.props;
    back();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Parquiem</Text>
        <RoundedInputs placeholder="Contraseña" nameIcon="lock" />
        <RoundedInputs placeholder="Repetir Contraseña" nameIcon="lock" />
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
  }
});

export default StepTwo;
