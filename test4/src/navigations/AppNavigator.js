import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import Homecreen from '../screens/Home/Home';
// import ProfileScreen from '../screens/Profile/Profile';
// import ProductDetailScreen from '../screens/ProductDetail/ProductDetail';

// Main screen
import CreditScreen from '../screens/CreditScreen/CreditScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import CreditDetailScreen from '../screens/CreditDetailScreen/CreditDetailScreen';
import ChangePassWordScreen from '../screens/ChangePassWordScreen/ChangePassWordScreen';

// authent screen
import LoginScreen from '../screens/AuthentScreen/LoginScreen/LoginScreen';

import CustomBtnGoBack from './CustomBtnGoBack';

const RootStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();
// helper function custom

const customHeaderStack = (titleName, isDisplayBtnGoback) => {
  return {
    headerLeft: isDisplayBtnGoback ? () => <CustomBtnGoBack size={36} /> : '',
    title: titleName,
    headerTintColor: '#47C2B1',
    headerTitleStyle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
  };
};

//----------------------------------------------------------------

function CreditStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={CreditScreen} name="CreditScreen" />
    </Stack.Navigator>
  );
}

function HistoryStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
}

function CreditDetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreditDetailScreen"
        component={CreditDetailScreen}
        options={customHeaderStack('RESULT', true)}
      />
    </Stack.Navigator>
  );
}

function ChangePassWordStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChangePassWordScreen"
        component={ChangePassWordScreen}
        options={customHeaderStack('Credit Detail', false)}
      />
    </Stack.Navigator>
  );
}

function Main() {
  return (
    <MainTab.Navigator
      initialRouteName="CreditStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'CreditScreen') {
            iconName = focused ? 'contacts' : 'contacts';
          } else if (route.name === 'HistoryScreen') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'SettingScreen') {
            iconName = focused ? 'format-align-right' : 'format-align-right';
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
        activeTintColor: '#009688',
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
        name="CreditScreen"
        component={CreditStack}
        options={{
          title: 'Credit',
        }}
      />
      <MainTab.Screen
        component={HistoryStack}
        name="HistoryScreen"
        options={{
          title: 'History',
        }}
      />
      <MainTab.Screen
        component={SettingStack}
        name="SettingScreen"
        options={{
          title: 'Setting',
        }}
      />
    </MainTab.Navigator>
  );
}

function AppNavigator() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="CreditScreen" component={Main} />
      <RootStack.Screen
        name="CreditDetailScreen"
        component={CreditDetailStack}
      />
      <RootStack.Screen
        name="ChangePassWordScreen"
        component={ChangePassWordStack}
      />
    </RootStack.Navigator>
  );
}

export default AppNavigator;
