import React from 'react';
import { Button } from '../../src/component';
import { render, fireEvent } from '@testing-library/react-native';

describe('Button Component', () => {

  it('should have a title & should call onPress when pressed', () => {
    
    const mockPressEvent = jest.fn();
    const buttonTitle = 'TestButton';
    const { getByText, toJSON } = render(
      <Button title={buttonTitle} onPress={mockPressEvent} />,
    );
    const button = getByText(buttonTitle);
    expect(button).toBeDefined();
    fireEvent.press(button);
    expect(mockPressEvent).toHaveBeenCalled();

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
  });
});
