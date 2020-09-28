import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ButtonOptionScreen } from '../../src/container';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import Slider from 'react-native-slide-to-unlock';

const mockStore = configureStore();

it('renders correctly', () => {
  const initialState = { name: '' };
  const store = mockStore(initialState);
  const { toJSON, getByTestId, UNSAFE_getByType } = render(
    <Provider store={store}>
      <ButtonOptionScreen />
    </Provider>,
  );

  const buttonOption1 = getByTestId('ButtonOption1');
  fireEvent(buttonOption1, 'onPress');
  const buttonOption2 = getByTestId('ButtonOption2');
  fireEvent(buttonOption2, 'onPress');
  const buttonOption3 = getByTestId('ButtonOption3');
  fireEvent(buttonOption3, 'onPress');
  const buttonOption4 = UNSAFE_getByType(Slider);
  fireEvent(buttonOption4, 'onEndReached');

  expect(Alert.alert).toHaveBeenCalledTimes(4);
  expect(toJSON()).toMatchSnapshot();
});
