import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Colors, Typography} from '../../styles';

const {width} = Dimensions.get('screen');

export default function LocationInfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          nativeID={`placeImage${props.id}`}
          style={styles.img}
          source={props.imagen}
        />
      </View>
      <View style={styles.textView}>
        <Text nativeID={`placeName${props.id}`} style={styles.text}>
          {props.lugar}
        </Text>
        <Text nativeID={`placeSmall${props.id}`} style={styles.small}>
          {props.lugarDireccion}
        </Text>
        <View nativeID={`placeStatus${props.id}`} style={styles.badge}>
          <Text style={styles.badgeText}>Disponible</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    width: width - 40,
    height: 300,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'column',
    overflow: 'hidden',
    elevation: 6,
  },
  imageView: {
    width: '100%',
    flex: 1,
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
  },
  textView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    width: '100%',
    padding: 10,
  },
  text: {
    fontSize: Typography.FONT_SIZE_24,
    ...Typography.FONT_BOLD,
    marginBottom: 10,
  },
  small: {
    color: Colors.GRAY,
    ...Typography.FONT_REGULAR,
    marginBottom: 8,
  },
  badge: {
    width: 100,
    height: 35,
    backgroundColor: Colors.PRIMARY_BLUE,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  badgeText: {
    color: Colors.WHITE,
    ...Typography.FONT_REGULAR,
  },
});
