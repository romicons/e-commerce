import { Flex } from '@chakra-ui/react';

import { Footer } from "./Layout/Footer"
import { Navbar } from "./Layout/Navbar"
import { MainContent } from './Layout/MainContent';

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
