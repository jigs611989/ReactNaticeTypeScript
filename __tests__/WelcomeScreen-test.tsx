import React from 'react';
import { WelcomeScreen } from '../src/container';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const { toJSON } = render(<WelcomeScreen />);
  expect(toJSON()).toMatchSnapshot();
});
