import React from 'react';
import {View, Text} from 'react-native';
import './styles';
import styles from './styles';
export default function CustomHeader(props) {
  const {title} = props;
  console.log(props.hanldePress);
  return (
    <View style={styles.wrapHeader}>
      {props.renderLeft()}
      <Text style={styles.title}>{title}</Text>
      {props.renderRight()}
    </View>
  );
}
