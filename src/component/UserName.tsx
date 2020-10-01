import React from 'react';
import { View } from 'react-native';
import { Label } from '../component';
import { useSelector } from 'react-redux';
import style from './style/UserName';

const UserName = () => {
  const name = useSelector((state) => state.name);

  return (
    <View style={style.container}>
      <Label style={style.text} title={name} />
    </View>
  );
};

export default UserName;
