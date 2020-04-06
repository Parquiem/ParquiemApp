import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Typography} from '../../styles';

export default class ProfileMinInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
        />
        <View>
          <Text style={styles.nombre}>{this.props.name}</Text>
          <Text style={styles.email}>{this.props.email}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 40,
    // backgroundColor: '#f00',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 15,
    marginRight: 30,
  },
  nombre: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    marginBottom: 5,
  },
  email: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    marginBottom: 5,
  },
});
