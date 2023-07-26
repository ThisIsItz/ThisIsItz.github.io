import { Flex } from '@chakra-ui/react'
import './App.css'
import IntroductionPage from './landing-page/IntroductionPage.tsx'
import React from 'react'

function App() {
  return (
    <Flex justifyContent="center" h="100vh">
      <IntroductionPage />
    </Flex>
  )
}

export default App
