import React, {version} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import data from '../../data.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Home() {
  const navigation = useNavigation();
  const dataRecords = [
    {
      name: 'Groceries',
      dateString: 'today',
      totalPay: '$250.000',
      category: 'Credit card',
      image: '../../assets/img/1.png',
      bg: '#E437BC',
    },
    {
      name: 'Clothes',
      dateString: '30/04/1975',
      totalPay: '$450.000',
      category: 'Credit card',
      image: '../../assets/img/2.png',
      bg: '#EFA75A',
    },
    {
      name: 'Rental',
      dateString: '07/05/1954',
      totalPay: '$550.000',
      category: 'Credit card',
      image: '../../assets/img/3.png',
      bg: '#23E3D6',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.wrapItem}
        onPress={() => navigation.navigate('ProductDetail')}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 4,
            height: 56,
            width: 56,
            borderRadius: 4,
            position: 'relative',
            top: 7,
            left: -20,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: item.bg,
            zIndex: 10,
          }}>
          <Image
            style={styles.imgItem}
            source={require('../../assets/img/3.png')}
          />
        </View>
        <View style={styles.wrapInfoItem}>
          <View
            style={{
              justifyContent: 'space-around',
            }}>
            <Text style={styles.infoName}>{item.name}</Text>
            <Text style={styles.infoCategory}>{item.category}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
            }}>
            <Text style={styles.infoDateString}>{item.dateString}</Text>
            <Text style={styles.infoTotalPay}>{item.totalPay}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const hanldPressLeft = () => {
    alert('thuc hien func home 1');
  };
  const hanldPressRight = () => {
    alert('func 2');
  };
  const renderLeft = () => {
    return (
      <MaterialIcons
        onPress={hanldPressLeft}
        name="format-align-left"
        size={24}
        color="#444"
      />
    );
  };
  const renderRight = () => {
    return (
      <MaterialIcons
        onPress={hanldPressRight}
        name="notifications"
        size={24}
        color="#444"
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        title="Trang chủ"
        renderLeft={renderLeft}
        renderRight={renderRight}
      />
      {/* List account */}
      <View style={styles.wrapListAccont}>
        <Text style={styles.titleList}>List of Account</Text>
        <View style={styles.ListAccont}>
          <View style={[styles.itemAccount, styles.bgBank]}>
            <Text style={styles.itemName}>Bank account</Text>
            <Text style={styles.itemCount}>$ 250.000</Text>
          </View>
          <View style={[styles.itemAccount, styles.bgCredit]}>
            <Text style={styles.itemName}>Credit card</Text>
            <Text style={styles.itemCount}>$ 150.000</Text>
          </View>
          <View style={[styles.itemAccount, styles.bgCash]}>
            <Text style={styles.itemName}>Cash</Text>
            <Text style={styles.itemCount}>$ 350.000</Text>
          </View>
        </View>
      </View>
      {/* Total balance */}
      <View style={styles.totalBalance}>
        <Text style={styles.countBalance}>$ 600.000</Text>
        <Text style={styles.titleBalance}>Total Balance</Text>
      </View>
      {/* Phan flastlist */}
      <View style={styles.wrapList}>
        <Text style={styles.titleList}>Last Records Overview</Text>
        <FlatList
          renderItem={renderItem}
          data={dataRecords}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapListAccont: {
    paddingHorizontal: 12,
    backgroundColor: '#F2F4F7',
  },
  titleList: {
    fontSize: 12,
    marginBottom: 10,
    color: '#555',
  },
  ListAccont: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemAccount: {
    width: '31%',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  itemName: {
    fontSize: 8,
    color: '#fff',
    marginBottom: 6,
  },
  itemCount: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  bgBank: {
    backgroundColor: '#E437BC',
  },
  bgCredit: {backgroundColor: '#EFA75A'},
  bgCash: {
    backgroundColor: '#23E3D6',
  },
  totalBalance: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginHorizontal: 12,
    borderRadius: 8,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  countBalance: {
    fontSize: 18,
    color: '#FF958F',
    textAlign: 'center',
    marginBottom: 6,
  },
  titleBalance: {
    color: '#A6B1C0',
    textAlign: 'center',
    fontSize: 14,
  },

  //------
  wrapList: {
    paddingHorizontal: 12,
    marginTop: 6,
    marginBottom: 10,
    flex: 1,
  },
  //---------- item
  wrapItem: {
    position: 'relative',
    marginLeft: 24,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
    height: 70,
    marginBottom: 5,
    borderRadius: 8,
    flexDirection: 'row',
    flex: 1,
  },

  imgItem: {
    height: '50%',
    width: '50%',
  },
  wrapInfoItem: {
    flex: 1,
    position: 'relative',
    left: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  infoName: {
    fontSize: 13,
    color: '#FF958F',
  },
  infoCategory: {fontSize: 11, color: '#999'},
  infoDateString: {fontSize: 11, color: '#888', fontWeight: 'bold'},
  infoTotalPay: {fontSize: 11, color: '#A6B1C0'},
});
