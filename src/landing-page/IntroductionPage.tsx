import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function IntroductionPage() {
  return (
    <Flex
      flexDir="column"
      alignSelf="center"
      fontSize="60px"
      color="white"
      zIndex="10"
      fontWeight="600"
    >
      <Flex>
        Hello, I'm
        <Text color="#f2bb16" ml="10px">
          Itziar Urbieta.
        </Text>
      </Flex>
      I'm a remote frontend developer.
    </Flex>
  )
}
