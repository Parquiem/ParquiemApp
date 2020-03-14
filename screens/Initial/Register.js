import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AnimatedMultistep from 'react-native-animated-multistep';
import {Colors, Typography} from '../../styles/index';
import {register} from '../../actions/authActions';
import {connect} from 'react-redux';

import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import {Navigation} from 'react-native-navigation';

const allSteps = [
  {
    name: 'step 1',
    component: StepOne,
  },
  {
    name: 'step 2',
    component: StepTwo,
  },
  {
    name: 'step 3',
    component: StepThree,
  },
];

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    phoneNumber: '',
  };

  componentDidMount() {
    console.log('Esto esta montado tio', this.props.auth);
  }

  componentDidUpdate() {
    let {name, email, password, password2, phoneNumber} = this.state;
    this.props.register({name, email, phoneNumber, password, password2});
    console.log('DidUpdate', this.state);
  }

  onNext = () => {
    console.log('Next');
  };

  onBack = () => {
    console.log('Back');
  };

  finish = finalState => {
    this.setState(state => ({...state, ...finalState}));
  };

  render() {
    return (
      <View style={styles.fl1}>
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
  fl1: {
    flex: 1,
  },
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

const mapStateToProps = store => ({
  auth: store.auth,
});

export default connect(
  mapStateToProps,
  {register},
)(Register);
