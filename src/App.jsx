import { useEffect } from 'react';

import { useColorMode, Flex } from '@chakra-ui/react';

import { Footer } from "./Layout/Footer";
import { Navbar } from "./Layout/Navbar";
import { MainContent } from './Layout/MainContent';

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
    document.documentElement.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  return (
    <Flex direction='column' justifyContent='space-between' minHeight='100vh'>
      <Navbar onToggleColorMode={toggleColorMode} colorMode={colorMode} />
      <MainContent />
      <Footer />
    </Flex>
  );
}

export default App;
