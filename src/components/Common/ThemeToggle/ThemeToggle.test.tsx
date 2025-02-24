import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeToggle } from './index';

describe('ThemeToggle', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <ChakraProvider>
        <ThemeToggle />
      </ChakraProvider>,
    );

    const toggleButton = getByRole('button');
    expect(toggleButton).toBeTruthy();
  });

  it('toggles theme when clicked', async () => {
    const { getByRole } = render(
      <ChakraProvider>
        <ThemeToggle />
      </ChakraProvider>,
    );

    const toggleButton = getByRole('button');
    await userEvent.click(toggleButton);

    const prefersDark = localStorage.getItem('prefers-dark');

    expect(prefersDark).toBeTruthy();
  });
});
