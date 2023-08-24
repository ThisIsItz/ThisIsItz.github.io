import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function MyProjects() {
  return (
    <Flex id="my-projects" h="100vh" m="auto" flexDir="column">
      <Text pt="40px" justifyContent="center" marginX="auto">
        My projects
      </Text>
      <Flex flexDir="column" gap="20px" mt="30px">
        <Flex gap="30px" justifyContent="center">
          <Box border="1px solid red">Project 1</Box>
          <Box border="1px solid green">Project 2</Box>
        </Flex>
        <Flex gap="30px" justifyContent="center">
          <Box border="1px solid red">Project 1</Box>
          <Box border="1px solid green">Project 2</Box>
        </Flex>
        <Flex gap="30px" justifyContent="center">
          <Box border="1px solid red">Project 1</Box>
          <Box border="1px solid green">Project 2</Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
