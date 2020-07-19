import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    marginTop: 50,
  },
  inputStyle: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue',
    marginTop: 10,
  },

  btnConver: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center',
  },
  currencyText: {
    color: 'green',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
