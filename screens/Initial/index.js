import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RoundedButton from '../../components/atomos/RoundedButton';
import {Colors, Typography} from '../../styles/index';

const {height, width} = Dimensions.get('screen');

class Initial extends Component {
  render() {
    return (
      <>
        <View style={styles.mainWrapper}>
          <View style={styles.contentView}>
            <Text style={styles.title}>Parquiem</Text>
            <RoundedButton
              bg={Colors.WHITE}
              color={Colors.PRIMARY_BLUE}
              shadow={styles.shadowBtn}
              text="Iniciar Sesión"
            />
            <RoundedButton
              bg={Colors.PRIMARY_BLUE}
              color={Colors.WHITE}
              text="Registrarse"
            />
          </View>
          <View style={styles.versionView}>
            <Text style={styles.versionText}>Parquiem v1.0</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  contentView: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  title: {
    color: Colors.PRIMARY_BLUE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_48,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    marginBottom: 80,
  },
  shadowBtn: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 1,
  },
  versionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  versionText: {
    color: Colors.GRAY,
    paddingBottom: 15,
  }
});

export default Initial;
