import React from 'react';
import { Label } from '../../src/component';
import { render } from '@testing-library/react-native';

describe('Label Component', () => {
  const labelTitle = 'TestLabel';

  it('should have a title', async () => {
    const { findByText } = render(<Label title={labelTitle} />);
    const title = await findByText(labelTitle);
    expect(title).toBeDefined();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(<Label title={labelTitle} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
