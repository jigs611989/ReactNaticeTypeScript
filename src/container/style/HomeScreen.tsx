import { StyleSheet } from 'react-native';
import AppStyle from '../../asset/AppStyle';

const style = StyleSheet.create({
  ...AppStyle,
  container: { 
    alignItems: 'center', 
  },
  labelStyle: {
    color: '#adff2f'
  },
  spacer: {
    flex: 1,
    backgroundColor: 'red'
  },
})

export default style;
