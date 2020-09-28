import { StyleSheet } from 'react-native';
import AppStyle from '../../asset/AppStyle';

const style = StyleSheet.create({
  ...AppStyle,
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
});

export default style;
