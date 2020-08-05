/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const App: () => React$Node = () => {
  const dataCoordinates = [
    {
      coordinates: [21.022132, 105.854208],

      place: 'Rạp tháng 8',
    },
    {
      coordinates: [21.020727, 105.85515],
      place: 'Nhà hát lớn',
    },
    {
      coordinates: [21.020117, 105.856216],
      place: 'Tokyo Red Grill',
    },
    {
      coordinates: [21.021605, 105.852777],
      place: 'VIB hội sở',
    },
  ];

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 21.021503,
              longitude: 105.854952,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {dataCoordinates.map((item, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.coordinates[0],
                  longitude: item.coordinates[1],
                  latitudeDelta: 0.02,
                  longitudeDelta: 0.02,
                }}>
                <Callout tooltip={false}>
                  <Text>{item.place}</Text>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
