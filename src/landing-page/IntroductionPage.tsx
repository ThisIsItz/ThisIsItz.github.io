import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function IntroductionPage() {
  return (
    <Flex flexDir="column" alignSelf="center" fontSize="45px">
      <Flex>
        Hello, I'm
        <Text ml="10px" fontWeight="600">
          Itziar Urbieta.
        </Text>
      </Flex>
      I'm a remote frontend developer.
    </Flex>
  )
}
