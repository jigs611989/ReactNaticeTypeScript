import React from 'react';
import { View, Text } from 'react-native';

export interface Props {}

const ButtonOptionScreen: React.FC<Props> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Button Option Screen</Text>
    </View>
  );
};

export default ButtonOptionScreen;
