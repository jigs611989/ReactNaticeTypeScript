import { StyleSheet } from 'react-native';
import AppStyle from '../../asset/AppStyle';

const style = StyleSheet.create({
  ...AppStyle,
  container: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  textInput: {
    height: 50,
    width: 300,
    backgroundColor: 'red'
  },
  spacer: {
    flex: 1,
    backgroundColor: 'red'
  }
})

export default style;
