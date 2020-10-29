import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { HomeScreen } from '../../src/container';
import { render, fireEvent } from '@testing-library/react-native';
import { String } from '../../src/asset';
import { mockedNavigate } from '../../__mock__/setup';

describe('HomeScreen', () => {

  it('render correctly', () => {
    
    const mockStore = configureStore();
    const initialState = { name: '' };
    const store = mockStore(initialState);
    const { toJSON, getByText } = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    // check button click event
    const buttonOption = getByText(String.Buttons.buttonOption);
    fireEvent.press(buttonOption);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
  });

});


