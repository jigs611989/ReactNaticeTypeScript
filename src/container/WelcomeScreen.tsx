import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Strings from '../asset/String';
import { Button, Label, TextField, PopUp } from '../component';
import { Screens } from '../constant/AppConstant';
import { saveName } from '../redux/action/name';
import { isValidName } from '../util';
import style from './style/WelcomeScreen';
import { checkDeviceType } from '../nativeModule/DeviceType';

const WelcomeScreen: React.FC = () => {
  const popupRef = useRef();
  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    checkDeviceType((error, type) => {
      // Alert.alert('You are running on ' + type);
      setDeviceType(type)
      popupRef.current?.show()
    });
  }, []);

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
      <PopUp
        ref={popupRef}
        title={'Device Type'}
        description={`You are running on ${deviceType}`}
        onPress={() => popupRef.current?.hide()}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
