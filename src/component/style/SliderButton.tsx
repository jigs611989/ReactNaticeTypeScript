import { StyleSheet } from 'react-native';
import { Color } from '../../asset';

const styles = StyleSheet.create({
  containerStyle: {
    margin: 20,
    height: 50,
    backgroundColor: Color.white,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  imageStyle: {
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 5,
    backgroundColor: 'red',
  }
});

export default styles;
