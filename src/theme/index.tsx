import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../styles/theme/';

type PropsProvider = {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<PropsProvider> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;