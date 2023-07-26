import { Box, Flex, Image } from '@chakra-ui/react'
import './App.css'
import IntroductionPage from './landing-page/IntroductionPage.tsx'
import React from 'react'
import laptopHands from '../src/images/laptop-hands.avif'

function App() {
  return (
    <Flex justifyContent="center" h="100vh" w="100vw">
      <Image src={laptopHands} h="100vh" w="100vw" position="absolute" />
      <Box
        background="black"
        opacity="0.5"
        h="100vh"
        w="100vw"
        position="absolute"
      />
      <IntroductionPage />
    </Flex>
  )
}

export default App
