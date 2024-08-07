import { useEffect } from 'react';

import { ChakraProvider, CSSReset, Box, useColorMode, IconButton, Flex } from '@chakra-ui/react';

import { theme } from './theme/theme.js';

import { Footer } from "./Layout/Footer";
import { Navbar } from "./Layout/Navbar";
import { MainContent } from './Layout/MainContent';

import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const savedMode = localStorage.getItem('color-mode');
    if (savedMode) {
      document.documentElement.setAttribute('data-theme', savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('color-mode', colorMode);
  }, [colorMode]);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex direction='column' justifyContent='space-between' minHeight='100vh'>
        <Navbar onToggleColorMode={toggleColorMode} colorMode={colorMode} />
        <MainContent />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
