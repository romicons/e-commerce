import { Flex } from '@chakra-ui/react';

import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

function App() {

  return (

      <Flex direction='column' justifyContent='space-between' minHeight='100vh'>
        <Navbar/>
        <Footer/>
      </Flex>

  )
}

export default App
