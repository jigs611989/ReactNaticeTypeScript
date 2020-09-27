import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { String } from '../asset';
import { Button, Label, SliderButton, UserName } from '../component';
import style from './style/ButtonOptionScreen';

const ButtonOptionScreen: React.FC = () => {
  return (
    <SafeAreaView style={[style.rootContainer, style.container]}>
      <UserName />
      <View style={style.spacer}/>
      <Label title={String.buttonVariationTitle} style={style.labelStyle}/>
      <Button 
        title={String.Buttons.pressMe} 
        onPress={() => Alert.alert('', String.Alert.buttonOption1)}
        textStyle={style.buttonOption1}
      />
      <Button 
        title={String.Buttons.pressMe} 
        onPress={() => Alert.alert('', String.Alert.buttonOption2)}
        style={style.buttonOption2}
      />
      <Button 
        title={String.Buttons.pressMe} 
        onPress={() => Alert.alert('', String.Alert.buttonOption3)}
        style={style.buttonStyle}
      />
      <SliderButton 
        onPress={() => Alert.alert('', String.Alert.buttonOption4)} 
      />
    </SafeAreaView>
  );
};

export default ButtonOptionScreen;
