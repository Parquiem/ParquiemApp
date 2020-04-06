import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import HamburguerButton from '../../components/atomos/HamburguerButton';
import Mapa from '../../components/moleculas/Mapa';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {SIDEMENU, PLACE_INFO_DETAIL} from '../../actions/screenDefinitions';
import LocationInfo from '../../components/atomos/LocationInfo';
const place = require('../../placeInfo').default;
const MULTIPLIER = 1.15;
const LONG_DURATION = 350 * MULTIPLIER;
const SHORT_DURATION = 190 * MULTIPLIER;

const {height} = Dimensions.get('screen');

class Main extends Component {
  state = {
    isActive: false,
  };

  componentDidMount() {
    console.log('Montado el main screen');
  }

  handleMenu = () => {
    Navigation.mergeOptions(SIDEMENU, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };

  locationPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: PLACE_INFO_DETAIL,
        passProps: {...place},
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    });
  };

  handlePress = () => {
    this.setState({isActive: !this.state.isActive});
  };

  render() {
    return (
      <View>
        <Mapa handleMarkerPress={this.handlePress} />
        <View style={styles.mainOptionContainer}>
          <HamburguerButton handleMenu={this.handleMenu} />
          {this.state.isActive && (
            <>
              <TouchableOpacity onPress={this.locationPress}>
                <LocationInfo {...place} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainOptionContainer: {
    justifyContent: 'space-between',
    height,
  },
});

Main.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  user: store.auth.user,
});

export default connect(
  mapStateToProps,
  null,
)(Main);
