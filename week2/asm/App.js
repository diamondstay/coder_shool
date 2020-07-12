/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Info from './src/component/Info/index';
import ListImage from './src/component/ListImage';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Info />
        <ListImage />
      </SafeAreaView>
    </>
  );
};

export default App;
