import React from 'react';
import { Text } from 'react-native';
import styles from './style/Label';

type Props = {
  title: string;
  style?: object;
};

const Label: React.FC<Props> = ({ style, title }) => (
  <Text style={[styles.title, style]}>{title}</Text>
);

export default Label;
