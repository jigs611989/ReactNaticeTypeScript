import React from 'react';
import { Button } from '../../src/component';
import { render, fireEvent } from '@testing-library/react-native';

describe('Button Component', () => {
  const mockPressEvent = jest.fn();
  const buttonTitle = 'TestButton';

  it('should have a title', async () => {
    const { findByText } = render(
      <Button title={buttonTitle} onPress={mockPressEvent} />,
    );
    const title = await findByText(buttonTitle);
    expect(title).toBeDefined();
  });

  it('should call onPress when pressed', async () => {
    const { findByText } = render(
      <Button title={buttonTitle} onPress={mockPressEvent} />,
    );
    const button = await findByText(buttonTitle);
    fireEvent.press(button);
    expect(mockPressEvent).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(
      <Button title={buttonTitle} onPress={mockPressEvent} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
