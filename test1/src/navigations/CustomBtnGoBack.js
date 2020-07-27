import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function CustomBtnGoBack(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="chevron-left"
        size={props.size ? props.size : 45}
        color={props.color ? props.color : '#673ab7'}
        style={{marginLeft: 0}}
      />
    </TouchableOpacity>
  );
}
