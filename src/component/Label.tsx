import React from 'react';
import { Text } from 'react-native';
import styles from './style/Label';

type Props = {
  title: string;
  style?: object;
};

const Label: React.FC<Props> = ({ style, title, ...props }) => (
  <Text 
    style={[styles.title, style]}
    {...props}
  >
    {title}
  </Text>
);

export default Label;
