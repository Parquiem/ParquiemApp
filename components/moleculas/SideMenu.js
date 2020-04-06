import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import ProfileMinInfo from '../atomos/ProfileMinInfo';
import MenuItem from '../atomos/MenuItem';
import {Colors, Typography} from '../../styles';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';
import PropTypes from 'prop-types';

class SideMenu extends Component {
  handleLogout = () => this.props.logout();

  render() {
    return (
      <View style={styles.background}>
        <ProfileMinInfo
          name={this.props.user.name}
          email={this.props.user.email}
        />
        <View style={styles.menuOptions}>
          <MenuItem texto="Comprar Parkoins" icono="cart-plus" />
          <MenuItem texto="Métodos de pago" icono="credit-card" />
          <MenuItem texto="Mis autos" icono="car" />
          <MenuItem texto="Configuración" icono="cog" />
        </View>
        <TouchableWithoutFeedback onPress={this.handleLogout}>
          <Text style={styles.logout}>Cerrar Sesión</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

SideMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  user: store.auth.user,
});

export default connect(
  mapStateToProps,
  {logout},
)(SideMenu);

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: Colors.WHITE,
    padding: 30,
  },
  menuOptions: {
    flex: 3,
  },
  logout: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_12,
  },
});
