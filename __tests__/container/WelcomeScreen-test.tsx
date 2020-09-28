import React from 'react';
import { Provider } from 'react-redux';
import { Alert } from 'react-native';
import configureStore from 'redux-mock-store';
import { WelcomeScreen } from '../../src/container';
import { render, fireEvent } from '@testing-library/react-native';
import { String } from '../../src/asset';

const mockStore = configureStore();

it('renders correctly', () => {
  const initialState = { name: '' };
  const store = mockStore(initialState);
  const { toJSON, getByText } = render(
    <Provider store={store}>
      <WelcomeScreen />
    </Provider>,
  );

  const continueButton = getByText(String.Buttons.continue);
  fireEvent.press(continueButton);
  expect(Alert.alert).toHaveBeenCalledTimes(1);

  expect(toJSON()).toMatchSnapshot();
});
