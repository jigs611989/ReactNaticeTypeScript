import { StyleSheet } from 'react-native';
import { Color } from '../../asset';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.blueGreyBorder,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    margin: 20,
    width: '80%'
  },
  input: {
    flex: 1,
    fontSize: 14,
    lineHeight: 16,
    color: Color.darkText,
    padding: 0,
  },
});

export default styles;
