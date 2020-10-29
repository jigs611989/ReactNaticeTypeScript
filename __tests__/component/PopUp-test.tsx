import React, { createRef } from 'react';
import { PopUp } from '../../src/component';
import { render } from '@testing-library/react-native';

describe('PopUp', () => {
  
  it('should have a title & description', () => {
    
    const popUp = createRef();
    const title = 'popUpTest';
    const descriptionText = 'testing descption';
    const mockOnPress = () => {};
    const { toJSON, getByText } = render(
      <PopUp
        title={title}
        description={descriptionText}
        onPress={mockOnPress}
        ref={popUp}
      />,
    );
    const popupTitle = getByText(title);
    expect(popupTitle).toBeDefined();
    const descriptionLabel = getByText(descriptionText);
    expect(descriptionLabel).toBeDefined();

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
  });
});
