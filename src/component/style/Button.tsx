import { StyleSheet } from 'react-native';
import { Color } from '../../asset';

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  text: {
    fontSize: 18,
    color: Color.white,
    fontWeight: 'bold'
  },
});

export default styles;
