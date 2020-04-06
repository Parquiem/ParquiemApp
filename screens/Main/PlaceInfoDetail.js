import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Colors, Typography} from '../../styles';

const {width, height} = Dimensions.get('screen');

export default function PlaceInfoDetail(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            nativeID={`placeImage${props.id}Dest`}
            style={styles.img}
            source={props.imagen}
          />
        </View>
        <View style={styles.mainContent}>
          <Text nativeID={`placeName${props.id}Dest`} style={styles.placeName}>
            {props.lugar}
          </Text>
          <Text nativeID={`placeSmall${props.id}`} style={styles.smallName}>
            {props.lugarDireccion}
          </Text>
          <View nativeID={`placeStatus${props.id}Dest`} style={styles.badge}>
            <Text style={styles.badgeText}>Disponible</Text>
          </View>
          <Text style={styles.interestTitle}>Lugares de interés</Text>
          <View nativeID="placeDescription">
            <View style={styles.line} />
            {props.interes.map(ip => (
              <View key={`ip-${ip.id}`} style={styles.interestWrapper}>
                <View style={styles.circle} />
                <View style={styles.interestContainer} key={ip.id}>
                  <Text style={styles.interestName}>{ip.nombre}</Text>
                  <Text style={styles.interestDir}>{ip.dir}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flexDirection: 'column',
  },
  imageWrapper: {
    flex: 2,
    width: '100%',
  },
  img: {
    width: '100%',
  },
  mainContent: {
    flex: 4,
    height: height - 300,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: Colors.WHITE,
  },
  badge: {
    width: 100,
    height: 35,
    backgroundColor: Colors.PRIMARY_BLUE,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  badgeText: {
    color: Colors.WHITE,
    ...Typography.FONT_REGULAR,
  },
  placeName: {
    ...Typography.FONT_BOLD,
    fontSize: Typography.FONT_SIZE_32,
  },
  smallName: {
    ...Typography.FONT_REGULAR,
    color: Colors.GRAY,
    marginBottom: 10,
  },
  interestTitle: {
    ...Typography.FONT_BOLD,
    fontSize: Typography.FONT_SIZE_18,
    marginBottom: 10,
  },
  interestWrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  interestContainer: {
    marginBottom: 25,
  },
  interestName: {
    ...Typography.FONT_BOLD,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.PRIMARY_BLUE,
    marginBottom: 5,
  },
  interestDir: {
    ...Typography.FONT_REGULAR,
    color: Colors.GRAY,
  },
  line: {
    height: '85%',
    width: 4,
    backgroundColor: Colors.DARK_BLUE,
    position: 'absolute',
    top: 1,
    left: 10,
  },
  circle: {
    width: 25,
    height: 25,
    borderColor: Colors.DARK_BLUE,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 3,
    marginRight: 15,
    backgroundColor: Colors.WHITE,
  },
});
