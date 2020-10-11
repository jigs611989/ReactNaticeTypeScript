import React from 'react';
import { Label } from '../../src/component';
import { render } from '@testing-library/react-native';

describe('Label Component', () => {

  it('should have a title', () => {
    
    const labelTitle = 'TestLabel';
    const { getByText, toJSON } = render(<Label title={labelTitle} />);
    const title = getByText(labelTitle);
    expect(title).toBeDefined();

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
  });
});
