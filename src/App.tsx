import { Box, Flex, Image } from '@chakra-ui/react'
import './App.css'
import IntroductionPage from './landing-page/IntroductionPage.tsx'
import React from 'react'

function App() {
  return (
    <Flex justifyContent="center" h="100vh" w="100vw">
      <Image
        src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        h="100vh"
        w="100vw"
        position="absolute"
      />
      <Box
        background="black"
        opacity="0.4"
        h="100vh"
        w="100vw"
        position="absolute"
      />
      <IntroductionPage />
    </Flex>
  )
}

export default App
