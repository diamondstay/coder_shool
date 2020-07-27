import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
export default function ProductDetail() {
  const navigation = useNavigation();
  const hanldPressLeft = () => {
    navigation.goBack();
  };
  const hanldPressRight = () => {
    alert('FUNC tạo thêm item nhung e chua co time lam');
  };
  const renderLeft = () => {
    return (
      <MaterialIcons
        onPress={hanldPressLeft}
        name="chevron-left"
        size={24}
        color="#444"
      />
    );
  };
  const renderRight = () => {
    return (
      <MaterialIcons
        onPress={hanldPressRight}
        name="add-circle-outline"
        size={24}
        color="#444"
      />
    );
  };
  return (
    <CustomHeader
      title="Groceries"
      renderLeft={renderLeft}
      renderRight={renderRight}
    />
  );
}
