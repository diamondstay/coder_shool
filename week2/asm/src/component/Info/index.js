import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

function Info() {
  return (
    <View style={styles.wrapInfo}>
      {/* Info va logo */}
      <View style={styles.infoUser}>
        <Image
          source={{
            uri:
              'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/p320x320/44088725_911043585767209_7723583901066592256_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=rJp932c205cAX8pU1hT&_nc_ht=scontent.fhan2-1.fna&_nc_tp=6&oh=63593df127c9b35cb8281e4cc435d38c&oe=5F3006D8',
          }}
          style={styles.logoInfo}
          resizeMode="cover"
        />
        <View style={styles.infoDetail}>
          <View>
            <Text style={styles.infoName}>Nam Phan</Text>
            <Text style={styles.infoJob}>Front-End Developer</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => alert('Follow me')}
              style={styles.btnFollow}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  letterSpacing: 0.4,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Follow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('sent message')}
              style={styles.btnSentMessage}>
              <Ionicons
                name="send-outline"
                color="#fff"
                size={18}
                style={{textAlign: 'center'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Thong bo sung */}
      <View style={styles.moreInfo}>
        <View style={styles.itemMoreInfo}>
          <Text style={styles.mI_count}>210</Text>
          <Text style={styles.mI_text}>Photos</Text>
        </View>
        <View style={styles.itemMoreInfo}>
          <Text style={styles.mI_count}>15k</Text>
          <Text style={styles.mI_text}>Followers</Text>
        </View>
        <View style={styles.itemMoreInfo}>
          <Text style={styles.mI_count}>605</Text>
          <Text style={styles.mI_text}>Following</Text>
        </View>
      </View>
    </View>
  );
}
export default Info;
