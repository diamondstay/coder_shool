import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import data from '../../data.json';
export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  // const navigation = useNavigation();

  // const hanldPressLeft = () => {
  //   alert('thuc hien func home 1');
  // };
  // const hanldPressRight = () => {
  //   alert('func 2');
  // };
  // const renderLeft = () => {
  //   return (
  //     <MaterialIcons
  //       onPress={hanldPressLeft}
  //       name="format-align-left"
  //       size={24}
  //       color="#444"
  //     />
  //   );
  // };
  // const renderRight = () => {
  //   return (
  //     <MaterialIcons
  //       onPress={hanldPressRight}
  //       name="notifications"
  //       size={24}
  //       color="#444"
  //     />
  //   );
  // };

  console.log(phoneNumber);
  return (
    <View style={styles.container}>
      {/* <CustomHeader
        title="Trang chủ"
        renderLeft={renderLeft}
        renderRight={renderRight}
      /> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
        <Text>ok</Text>
      </TouchableOpacity> */}
      <View style={styles.wrapImage}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://image.freepik.com/free-vector/isometric-vector-illustration-concept-business-auditing-tax-audit-verification-accounting-data-financial-report-professional-audit-advice_115560-31.jpg',
          }}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          color: '#666',
          fontSize: 15,
        }}>
        Nhập số điện thoại để kiểm tra điểm tín dụng
      </Text>
      <TextInput
        textAlign="center"
        keyboardType="phone-pad"
        autoFocus
        placeholder="Nhập số điện thoại ở đây"
        style={styles.input}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TouchableOpacity
        style={styles.wrapBtn}
        onPress={() => alert(`${phoneNumber}`)}>
        <Text style={styles.textBtn}>Kiểm tra</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  wrapImage: {
    height: 230,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  input: {
    fontSize: 14,
    height: 46,
    width: 300,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  wrapBtn: {
    marginVertical: 25,
    width: 100,
    height: 40,
  },
  textBtn: {
    color: '#fff',
    backgroundColor: '#4788f4',
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
    letterSpacing: 1,
    borderRadius: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
