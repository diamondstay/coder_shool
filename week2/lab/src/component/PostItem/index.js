import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function index(props) {
  const [count, setCount] = useState(0);
  console.log(props);
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.postHeder}>
        <Image
          source={{
            uri: item.url_user,
          }}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Image
        source={{
          uri: item.url_image,
        }}
        resizeMode="cover"
        style={{
          borderRadius: 4,
          width: '100%',
          height: 300,
        }}
      />
      <View style={styles.interact}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Ionicons
            name="heart-outline"
            color="#000"
            size={32}
            style={{marginHorizontal: 8}}
          />
        </TouchableOpacity>
        <Ionicons
          name="chatbubbles-outline"
          color="#000"
          size={32}
          style={{marginHorizontal: 8}}
        />
        <Ionicons
          name="share-outline"
          color="#000"
          size={32}
          style={{marginHorizontal: 8}}
        />
      </View>
      <View style={styles.countInteract}>
        <Ionicons
          name="heart-half-outline"
          color="#e91e63db"
          size={27}
          style={{marginHorizontal: 8, width: 25}}
        />
        <Text>{count}</Text>
      </View>
    </View>
  );
}
