import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 10,
    borderBottomColor: '#eae8e8d1',
    borderBottomWidth: 1,
  },
  postHeder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    width: '100%',
    marginVertical: 10,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 23,
  },
  name: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
    fontWeight: '700',
    fontFamily: 'Tahoma',
  },
  interact: {
    height: 40,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
  },
  countInteract: {
    height: 40,
    borderTopColor: '#eae8e8d1',
    borderTopWidth: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
});
export default styles;
