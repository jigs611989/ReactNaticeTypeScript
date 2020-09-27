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
  buttonOption2: {
    backgroundColor: '#008080'
  },
  buttonOption1: {
    color: 'blue'
  }
})

export default style;
