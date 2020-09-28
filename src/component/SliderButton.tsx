import React from 'react';
import { Image, Text } from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import { String } from '../asset';
import style from './style/SliderButton';

type Props = {
  onPress: () => void,
  title?: string,
  childrenContainer?: object,
  containerStyle?: object,
  sliderElement?: React.Component,
  testID?: string
};

const SliderButton: React.FC<Props> = ({
  onPress,
  title,
  sliderElement,
  childrenContainer,
  containerStyle,
  testID
}) => {
  return (
    <Slider
      childrenContainer={childrenContainer}
      onEndReached={onPress}
      containerStyle={[style.containerStyle, containerStyle]}
      sliderElement={
        sliderElement ? (
          sliderElement
        ) : (
          <Image
            style={style.imageStyle}
            source={{
              uri:
                'https://facebook.github.io/react-native/docs/assets/favicon.png',
            }}
          />
        )
      }>
      <Text>{title ? title : String.Buttons.slideMe}</Text>
    </Slider>
  );
};

export default SliderButton;
