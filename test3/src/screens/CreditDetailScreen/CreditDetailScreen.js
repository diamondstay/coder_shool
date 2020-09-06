import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {LineChart, Grid} from 'react-native-svg-charts';
export default function CreditDetailScreen() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
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
  return (
    // <CustomHeader
    //   title="RESULT"
    //   renderLeft={renderLeft}
    //   // renderRight={renderRight}
    // />
    <View>
      <LineChart
        style={{height: 200}}
        data={data}
        svg={{stroke: 'rgb(134, 65, 244)'}}
        contentInset={{top: 20, bottom: 20}}>
        <Grid />
      </LineChart>
    </View>
  );
}
