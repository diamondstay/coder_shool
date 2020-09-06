import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import 'moment/locale/en-au';
import moment from 'moment';

export default function CreditScreen() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(0);
  const renderLeft = () => {
    return (
      <Text style={styles.headerLeft}>{moment().format('MMMM Do YYYY')}</Text>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader renderLeft={renderLeft} />
      <Text style={styles.titleScreen}>Credit</Text>
      <View style={styles.wrapInput}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://mobifone.vn/wps/PA_neo-cvqt-thongthuo/jsp/map/lte/img/icon_call.png',
          }}
        />
        <Text style={styles.textCenter}>
          Enter Phone Number for check credit score
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
          onPress={() => navigation.navigate('CreditDetailScreen')}>
          <Text style={styles.textBtn}>SHOW CREDIT SCORE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  headerLeft: {
    color: '#C9D6DF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleScreen: {
    paddingHorizontal: 12,
    fontWeight: 'bold',
    fontSize: 28,
    color: '#001B36',
  },
  wrapInput: {
    alignItems: 'center',
    // display: flex,
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 12,
    backgroundColor: '#F0F5F9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    height: 200,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 12,
    color: '#001B36',
    fontWeight: 'bold',
    marginTop: 3,
  },
  input: {
    color: '#52616B',
    marginTop: 12,
    fontSize: 12,
    height: 30,
    width: 200,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    backgroundColor: '#fff',
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
    marginTop: 15,
    width: 200,
    height: 30,
  },
  textBtn: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#47C2B1',
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
    letterSpacing: 1,
    borderRadius: 100,

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
