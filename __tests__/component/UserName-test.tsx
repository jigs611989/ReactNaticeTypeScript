import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { UserName } from '../../src/component';
import { render } from '@testing-library/react-native';

const mockStore = configureStore();

describe('UserName Component', () => {

  it('should have a title as set in redux mock store', () => {

    const initialState = { name: 'Test User' };
    const store = mockStore(initialState);
    const { getByText, toJSON } = render(
      <Provider store={store}>
        <UserName />
      </Provider>,
    );
    const nameLabel = getByText(initialState.name);
    expect(nameLabel).toBeDefined();

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
  });
});
