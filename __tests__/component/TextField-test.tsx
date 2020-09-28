import React from 'react';
import { TextField } from '../../src/component';
import { render } from '@testing-library/react-native';
import { fireEvent } from '@testing-library/react-native';

describe('TextField Component', () => {
  const mockonChangeText = jest.fn();
  const placeholder = 'Test placeholder prop';

  it('should have a placeholder', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder={placeholder} />,
    );
    const testInputObj = getByPlaceholderText(placeholder);
    expect(testInputObj).toBeDefined();
  });

  it('should call onChangeText when user is typing', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder={placeholder} onChangeText={mockonChangeText} />,
    );
    const testInputObj = getByPlaceholderText(placeholder);
    fireEvent(testInputObj, 'onChangeText', 'testing');
    expect(mockonChangeText).toHaveBeenCalledWith('testing');
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(<TextField placeholder={placeholder} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
