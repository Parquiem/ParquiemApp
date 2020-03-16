import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../styles';
import RoundedButton from '../../components/atomos/RoundedButton';
import {logout} from '../../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Main extends Component {
  componentDidMount() {
    console.log('Montado el main screen');
  }

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    console.log('props en main', this.props);
    const {name, email} = this.props.user;
    return (
      <View>
        <Text>Hola {name}</Text>
        <Text>Tu email es: {email}</Text>
        <RoundedButton
          onPressHandler={this.handleLogout}
          bg={Colors.PRIMARY_BLUE}
          text="Cerrar sesión"
          color={Colors.WHITE}
        />
      </View>
    );
  }
}

Main.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  user: store.auth.user,
});

export default connect(
  mapStateToProps,
  {logout},
)(Main);
