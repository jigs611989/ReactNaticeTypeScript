import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Strings from '../asset/String';
import { Button, Label, TextField } from '../component';
import { Screens } from '../constant/AppConstant';
import { saveName } from '../redux/action/name';
import { isValidName } from '../util';
import style from './style/WelcomeScreen';

const WelcomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onPressContinue = useCallback(() => {
    if(isValidName(name)) {
      dispatch(saveName(name))
      navigate(Screens.AppStack)
    } else {
      Alert.alert('', Strings.Alert.invalidName)
    }
  }, [name])

  return (
    <SafeAreaView style={[style.rootContainer, style.container]}>
      <View style={style.spacer}/>
      <Label title={Strings.welcome} />
      <View style={style.spacer}/>
      <TextField 
        placeholder={Strings.enterYourName}
        value={name}
        onChangeText={(text) => setName(text)}
        autoCorrect={false}
      />
      <Button 
        title={Strings.Buttons.continue} 
        onPress={onPressContinue}
        style={style.buttonStyle}
      />
      <View style={style.spacer}/>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
