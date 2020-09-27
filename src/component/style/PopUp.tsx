import { StyleSheet } from 'react-native';
import { Color } from '../../asset';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  popUp: {
    backgroundColor: Color.white,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 30,

    shadowColor: Color.black,
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 1,

    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 340,
    maxHeight: 740,
  },
  title: {
    marginVertical: 9,
    fontSize: 18,
    color: Color.black,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    color: Color.placeholder,
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonStyle: {
    width: 300,
    backgroundColor: Color.primary,
  },
});

export default styles;
