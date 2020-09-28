import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import style from './style/UserName';

const UserName = () => {
  const name = useSelector((state) => state.name);

  return (
    <View style={style.container}>
      <Text style={style.text}>{name}</Text>
    </View>
  );
};

export default UserName;
