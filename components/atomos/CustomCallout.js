import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';
import avatar from '../../assets/images/avatar.png';

export default function CustomCallout() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.img} source={avatar} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.text, ...styles.textTime}}>10:31</Text>
          <Text style={styles.text}>420-69-69</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 10,
    width: 200,
    height: 100,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
    // resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: Colors.STATE_SUCCESS,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  textTime: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
});
