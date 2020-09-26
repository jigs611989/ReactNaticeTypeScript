import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constant/Screens';

export interface Props {}

const HomeScreen: React.FC<Props> = (props) => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={() => navigate(Screens.ButtonOptionScreen)}>
        <Text>Home Screen</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
