import React from 'react';
import { TextField } from '../../src/component';
import { render } from '@testing-library/react-native';
import { fireEvent } from '@testing-library/react-native';

describe('TextField Component', () => {
  
  it('should have a placeholder & should call onChangeText when user is typing', () => {
    
    const mockonChangeText = jest.fn();
    const placeholder = 'Test placeholder prop';
    const { getByPlaceholderText, toJSON } = render(
      <TextField placeholder={placeholder} onChangeText={mockonChangeText} />,
    );
    const testInputObj = getByPlaceholderText(placeholder);
    expect(testInputObj).toBeDefined();
    fireEvent(testInputObj, 'onChangeText', 'testing');
    expect(mockonChangeText).toHaveBeenCalledWith('testing');

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
  });
});
