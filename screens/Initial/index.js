import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RoundedButton from '../../components/atomos/RoundedButton';
import {Colors, Typography} from '../../styles/index';
import {Navigation} from 'react-native-navigation';

class Initial extends Component {
  //TODO: Arreglar la funcion para no hacer hardcode el nombre del componente
  goToLogin = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'login',
        options: {
          topBar: {
            animate: false,
            leftButtonColor: Colors.PRIMARY_BLUE,
            background: {
              color: Colors.DARKER_WHITE,
            },
            elevation: 0,
          },
        },
      },
    });
  };

  goToRegister = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'register',
        options: {
          topBar: {
            animate: false,
            leftButtonColor: Colors.PRIMARY_BLUE,
            background: {
              color: Colors.DARKER_WHITE,
            },
            elevation: 0,
          },
        },
      },
    });
  };

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
              text="Iniciar Sesión con facebook"
            />
            <RoundedButton
              bg={Colors.PRIMARY_BLUE}
              color={Colors.WHITE}
              text="Iniciar sesión"
              goTo="login"
              onPressHandler={this.goToLogin}
            />
            <Text>
              <Text>¿No tienes cuenta? </Text>
              <Text onPress={this.goToRegister} style={styles.register}>
                Registrate
              </Text>
            </Text>
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
    backgroundColor: Colors.DARKER_WHITE,
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
    elevation: 2,
  },
  register: {
    color: Colors.PRIMARY_BLUE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
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

export default Initial;
