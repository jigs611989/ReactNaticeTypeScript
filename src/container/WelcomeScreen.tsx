import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constant/Screens';

export interface Props {}

const WelcomeScreen: React.FC<Props> = (props) => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={() => navigate(Screens.AppStack)}>
        <Text>Welcome Screen</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
