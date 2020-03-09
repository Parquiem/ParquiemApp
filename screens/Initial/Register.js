import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AnimatedMultistep from 'react-native-animated-multistep';
import {Colors, Typography} from '../../styles/index';

import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';

const allSteps = [
  {
    name: 'step 1',
    component: StepOne,
  },
  {
    name: 'step 2',
    component: StepTwo,
  },
];

class Register extends Component {
  onNext = () => {
    console.log('Next');
  };

  onBack = () => {
    console.log('Back');
  };

  finish = finalState => {
    console.log(finalState);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
          comeInOnNext="fadeInRight"
          OutOnNext="fadeOutLeft"
          comeInOnBack="fadeInLeft"
          OutOnBack="fadeOutRight"
        />
      </View>
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

export default Register;
