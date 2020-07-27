import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Homecreen from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetail';
import CustomBtnGoBack from './CustomBtnGoBack';

const RootStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();
// helper function custom

const customHeaderStack = (titleName, isDisplayBtnGoback) => {
  return {
    headerLeft: isDisplayBtnGoback ? () => <CustomBtnGoBack /> : '',
    title: titleName,
    headerTintColor: '#673ab7',
    headerTitleStyle: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
  };
};

//----------------------------------------------------------------

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Homecreen} name="Home" />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function ProductDetailStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={customHeaderStack('Chi tiết', false)}
      />
    </Stack.Navigator>
  );
}

function Main() {
  return (
    <MainTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'portrait' : 'portrait';
          }
          // You can return any component that you like here!
          return (
            <MaterialIcons
              name={iconName}
              size={size}
              color={color}
              style={{marginTop: 5}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF958F',
        inactiveTintColor: '#989898',
        labelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
        style: {
          height: 55,
        },
      }}>
      <MainTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Trang chủ',
        }}
      />
      <MainTab.Screen
        component={ProfileStack}
        name="Profile"
        options={{
          title: 'Hồ sơ',
        }}
      />
    </MainTab.Navigator>
  );
}

function AppNavigator() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Home" component={Main} />
      <RootStack.Screen name="ProductDetail" component={ProductDetailStack} />
    </RootStack.Navigator>
  );
}

export default AppNavigator;
