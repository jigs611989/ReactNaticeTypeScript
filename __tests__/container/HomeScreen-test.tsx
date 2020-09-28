import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { HomeScreen } from '../../src/container';
import { render } from '@testing-library/react-native';

const mockStore = configureStore();

it('renders correctly', () => {
  const initialState = { name: '' };
  const store = mockStore(initialState);
  const { toJSON } = render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>,
  );
  expect(toJSON()).toMatchSnapshot();
});
