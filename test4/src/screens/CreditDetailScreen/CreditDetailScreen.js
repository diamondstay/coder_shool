import React, {useEffect, useState} from 'react';
import styles from './style';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {AreaChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import productApi from '../../api/productApi';
import {save_product} from '../../actions/productAction';
import _ from 'lodash';
export default function CreditDetailScreen() {
  // const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = [80, 250, 540, 660, 120, -120, 340, 400, 520, 580, 620, 700];

  const contentInset = {top: 20, bottom: 20};
  // const navigation = useNavigation();
  // const hanldPressLeft = () => {
  //   navigation.goBack();
  // };
  // const hanldPressRight = () => {
  //   alert('FUNC tạo thêm item nhung e chua co time lam');
  // };
  // const renderLeft = () => {
  //   return (
  //     <MaterialIcons
  //       onPress={hanldPressLeft}
  //       name="chevron-left"
  //       size={24}
  //       color="#444"
  //     />
  //   );
  // };
  // const renderRight = () => {
  //   return (
  //     <MaterialIcons
  //       onPress={hanldPressRight}
  //       name="add-circle-outline"
  //       size={24}
  //       color="#444"
  //     />
  //   );
  // };

  const averageScore = (data) => {
    return data.reduce((total, num) => total + num, 0) / data.length;
  };

  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();
  console.log('xxxxxxxxxxxx', products);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const res = await productApi.getAll(params);
        setLoading(false);
        dispatch(save_product(res.data));
      } catch (error) {
        console.log('Fail to fetch products', error);
      }
    };
    fetchProduct();
  }, []);

  return (
    // <CustomHeader
    //   title="RESULT"
    //   renderLeft={renderLeft}
    //   // renderRight={renderRight}
    // />
    <>
      {!loading ? (
        <View>
          <View>
            <Text style={styles.phoneNumber}>0983690964</Text>
            <Text style={styles.score}>
              Score : {averageScore(data).toFixed(1)}
            </Text>
          </View>
          <View style={{height: 200, flexDirection: 'row'}}>
            <YAxis
              data={data}
              contentInset={contentInset}
              svg={{
                fill: 'grey',
                fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value}`}
              style={{marginLeft: 2}}
            />
            <AreaChart
              style={{height: '100%', flex: 1, marginHorizontal: 4}}
              data={data}
              contentInset={{top: 30, bottom: 30, left: 3, right: 10}}
              curve={shape.curveNatural}
              svg={{fill: '#47C2B1'}}>
              <Grid />
            </AreaChart>
          </View>
          <XAxis
            style={{marginLeft: 20, marginTop: -12}}
            data={data}
            formatLabel={(value, index) => {
              return `${index + 1}`;
            }}
            contentInset={{left: 10, right: 20}}
            svg={{fontSize: 10, fill: '#52616B'}}
          />
        </View>
      ) : (
        <View>
          <Text>Loading....</Text>
        </View>
      )}
    </>
  );
}
