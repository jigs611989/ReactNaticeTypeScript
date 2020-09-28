import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Color } from '../asset';
import styles from './style/TextField';

type TextFieldProps = TextInputProps & {
  containerStyle?: object;
  inputStyle?: object;
};

const TextField: React.FC<TextFieldProps> = ({
  containerStyle,
  inputStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholderTextColor={Color.placeholder}
        style={[styles.input, inputStyle]}
        {...props}
      />
    </View>
  );
};

export default TextField;
