import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { String } from '../asset';
import { Button, UserName } from '../component';
import { Screens } from '../constant/AppConstant';
import style from './style/HomeScreen';

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={[style.rootContainer, style.container]}>
      <UserName />
      <View style={style.spacer} />
      <Button
        title={String.Buttons.buttonOption}
        onPress={() => navigate(Screens.ButtonOptionScreen)}
        style={style.buttonStyle}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
