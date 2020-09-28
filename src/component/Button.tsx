import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style/Button';

type Props = {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  testID?: string;
};

const Button: React.FC<Props> = ({
  title,
  onPress,
  style,
  textStyle,
  testID,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      testID={testID}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
