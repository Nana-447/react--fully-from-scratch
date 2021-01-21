import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';
// Function Component

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
