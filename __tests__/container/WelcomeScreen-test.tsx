import React from 'react';
import { Provider } from 'react-redux';
import { Alert } from 'react-native';
import configureStore from 'redux-mock-store';
import { WelcomeScreen } from '../../src/container';
import { render, fireEvent } from '@testing-library/react-native';
import { String } from '../../src/asset';
import { mockedNavigate } from '../../__mock__/setup';

describe('WelcomeScreen', () => {

  it('should render correctly', () => {
    
    const mockStore = configureStore();
    const initialState = { name: '' };
    const store = mockStore(initialState);
    const { toJSON, getByText, getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>,
    );
  
    // test continue press without entering name
    const continueButton = getByText(String.Buttons.continue);
    fireEvent.press(continueButton);
    expect(Alert.alert).toHaveBeenCalledTimes(1);
  
    // test continue press after entering valid name
    const nameTextField = getByPlaceholderText(String.enterYourName);
    fireEvent(nameTextField, 'onChangeText', 'Jignesh')
    fireEvent.press(continueButton);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  
    // check popup with simulator
    const popupText = getByText('You are running on simulator');
    expect(popupText).toBeTruthy();
    const modalObj = getByTestId('ErrorPopupModal');
    expect(modalObj?.props?.visible).toBe(true);
  
    // Check after closing popup
    fireEvent(modalObj, 'onPress');
    expect(modalObj?.props?.visible).toBe(false);
  
    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
  });
  
})

