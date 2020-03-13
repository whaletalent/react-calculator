import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';

import Calculator from './main/Calculator';



test('renders main calculator', () => {
  const { getByTestId } = render(<Calculator />);
  const calculator = getByTestId('calculator')
  expect(calculator).toBeInTheDocument();
});

