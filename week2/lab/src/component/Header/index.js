import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
function Header() {
  return (
    <View style={styles.wrapHeader}>
      <View
        style={{
          width: 25,
          marginLeft: 15,
        }}></View>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
        }}
        style={styles.logoHeader}
        resizeMode="contain"
      />

      <Ionicons
        name="file-tray-outline"
        color="#000"
        size={22}
        style={{marginRight: 15, width: 25}}
      />
    </View>
  );
}
export default Header;
