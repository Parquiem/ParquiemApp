import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('screen');

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#f1f6ff"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 28.640304,
        longitude: -106.072478,
        latitudeDelta: 0.01,
        longitudeDelta: 0,
      },
      markerActive: false,
      count: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.marker(), 3000);
  }

  componentDidUpdate() {
    if (this.state.count > 3) {
      clearInterval(this.timer);
    }
  }

  marker() {
    this.setState({
      markerActive: !this.state.markerActive,
      count: !this.state.count + 1,
    });
  }

  render() {
    return (
      <View style={styles.containerMap}>
        <MapView
          style={styles.map}
          region={this.state.region}
          customMapStyle={mapStyle}>
          {this.state.markerActive && (
            <Marker
              identifier="1"
              onPress={this.props.handleMarkerPress}
              coordinate={{
                latitude: 28.640304,
                longitude: -106.072478,
              }}
            />
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  customViewCallout: {
    width: 200,
    height: 100,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default Mapa;
