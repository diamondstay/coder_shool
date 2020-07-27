import React from 'react';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen.js';
import JobScreen from '../screens/JobScreen/JobScreen';
import JobDetailScreen from '../screens/JobScreen/JobDetailScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
//import getTabBarIcon from '../components/Share/IconWithBadge';
import Ionicons from 'react-native-vector-icons/Ionicons';

// khi chua dang nhap vao app lan nao, vao ap lan dau
// => gom man hinh dang nhap, chua co thi vao man hinh dang ky

export const SignedOut = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In',
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up',
      },
    },
  },
  {headerLayoutPreset: 'center'},
);

const JobNavigator = createStackNavigator(
  {
    Job: {
      screen: JobScreen,
    },
    JobDetail: {
      screen: JobDetailScreen,
    },
  },
  {headerLayoutPreset: 'center'},
);
JobNavigator.navigationOptions = {
  title: 'Công việc',
  tabBarIcon: ({focused}) => {
    return (
      <Ionicons
        name="ios-paper"
        size={30}
        color={focused ? 'slateblue' : 'gray'}
        style={{marginTop: 5}}
      />
    );
  },
};
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {headerLayoutPreset: 'center'},
);
HomeStack.navigationOptions = {
  title: 'Trang chủ',
  tabBarIcon: ({focused}) => {
    return (
      <Ionicons
        name="ios-home"
        size={30}
        color={focused ? 'slateblue' : 'gray'}
        style={{marginTop: 5}}
      />
    );
  },
};
const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
  {headerLayoutPreset: 'center'},
);
ProfileStack.navigationOptions = {
  title: 'Hồ sơ',
  tabBarIcon: ({focused}) => {
    return (
      <Ionicons
        name="ios-contact"
        size={30}
        color={focused ? 'slateblue' : 'gray'}
        style={{marginTop: 5}}
      />
    );
  },
};
const CalendarStack = createStackNavigator(
  {
    Calendar: {
      screen: CalendarScreen,
    },
  },
  {headerLayoutPreset: 'center'},
);
CalendarStack.navigationOptions = {
  title: 'Lịch',
  tabBarIcon: ({focused}) => {
    return (
      <Ionicons
        name="ios-calendar"
        size={30}
        color={focused ? 'slateblue' : 'gray'}
        style={{marginTop: 5}}
      />
    );
  },
};
const MessageStack = createStackNavigator(
  {
    Message: {
      screen: MessageScreen,
    },
  },
  {headerLayoutPreset: 'center'},
);
MessageStack.navigationOptions = {
  title: 'Tin nhắn',
  tabBarIcon: ({focused}) => {
    return (
      <Ionicons
        name="ios-chatboxes"
        size={30}
        color={focused ? 'slateblue' : 'gray'}
        style={{marginTop: 5}}
      />
    );
  },
};

const AppNavigator = createBottomTabNavigator(
  {
    SignedOut,
    HomeStack,
    JobNavigator, // 2 man hinh
    CalendarStack,
    MessageStack,
    ProfileStack,
    // tong cong 6
  },
  // {
  //   defaultNavigationOptions: ({navigation}) => ({
  //     tabBarIcon: ({focused}) => getTabBarIcon(navigation, focused),
  //   }),
  // },
);

export default createAppContainer(AppNavigator);
