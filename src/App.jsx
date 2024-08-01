import { Flex } from '@chakra-ui/react';

import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { MainContent } from './components/MainContent';

function App() {

  return (

      <Flex direction='column' justifyContent='space-between' minHeight='100vh'>
        <Navbar/>
        <MainContent/>
        <Footer/>
      </Flex>

  )
}

export default App
