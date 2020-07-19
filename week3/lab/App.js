/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

const ConverTypeBtn = ({
  from,
  to,
  fromCurrency,
  toCurrency,
  setConversionCurrencies,
}) => {
  const bgColor =
    from === fromCurrency && to === toCurrency ? 'lightblue' : null;
  const buttonStyle = {backgroundColor: bgColor};
  return (
    <TouchableOpacity
      style={[styles.btnConver, buttonStyle]}
      onPress={() => setConversionCurrencies(from, to)}>
      <Text>
        {from === 'VND' ? '❤️' : '🍉'} {from} to {to === 'USD' ? '🍉' : '❤️'}{' '}
        {to}
      </Text>
    </TouchableOpacity>
  );
};

const App: () => React$Node = () => {
  const [currentCurrencyValue, setCurrentCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('VND');
  const [toCurrency, setToCurrency] = useState('USD');

  const changeCurrentCurrencyValue = (value) => {
    setCurrentCurrencyValue(value);

    fromCurrency === 'VND' && setConvertedCurrencyValue(value / 23000);
    fromCurrency === 'USD' && setConvertedCurrencyValue(value * 23000);
  };
  const setConversionCurrencies = (from, to) => {
    setFromCurrency(from);
    setToCurrency(to);
  };

  useEffect(() => {
    if (Number(currentCurrencyValue) > 0) {
      setCurrentCurrencyValue(currentCurrencyValue);

      fromCurrency === 'VND' &&
        setConvertedCurrencyValue(currentCurrencyValue / 23000);
      fromCurrency === 'USD' &&
        setConvertedCurrencyValue(currentCurrencyValue * 23000);
    }
  }, [fromCurrency]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>
            Please enter the value of the currency you want to convert
          </Text>
          <TextInput
            placeholder="100,000,000 VND"
            autoFocus={true}
            value={currentCurrencyValue}
            name="price"
            onChangeText={changeCurrentCurrencyValue}
            style={styles.inputStyle}
            selectionColor="red"
            keyboardType="number-pad"
          />

          <ConverTypeBtn
            from="VND"
            to="USD"
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            setConversionCurrencies={setConversionCurrencies}
          />
          <ConverTypeBtn
            from="USD"
            to="VND"
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            setConversionCurrencies={setConversionCurrencies}
          />

          <Text>Current currency:</Text>
          <Text style={styles.currencyText}>
            {currentCurrencyValue} {fromCurrency === 'VND' ? 'VND' : 'USD'}
          </Text>
          <Text>Conversion currenecy:</Text>
          <Text style={styles.currencyText}>
            {convertedCurrencyValue} {toCurrency === 'USD' ? 'USD' : 'VND'}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

// Để  reuse the logic which handle this behavior, và dễ dàng scale, modifier khuyên bạn nên tách thành component hoặc 1 func return ra JSX
// rồi chuyền vào props khác nhau ( props là :  tham số đầu vào của 1 componet <==> param của 1 function)
