import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const platforms = [
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/itziarurbieta/'
  },
  {
    name: 'github',
    href: 'https://github.com/ThisIsItz'
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/ItUnderTheSea'
  }
]

const defaultColor = '#f2bb16'

export default function IntroductionPage() {
  return (
    <Flex
      flexDir="column"
      alignSelf="center"
      fontSize="60px"
      p="60px"
      color="white"
      zIndex="10"
      fontWeight="600"
      mt="-70px"
    >
      <Flex>
        Hello, I'm
        <Text color={defaultColor} ml="10px">
          Itziar Urbieta.
        </Text>
      </Flex>
      I'm a remote frontend developer.
      <Flex
        gap="20px"
        justifyContent="center"
        position="absolute"
        bottom="100px"
        ml="auto"
        mr="auto"
        left="0"
        right="0"
        className="hi-icon-effect-1 hi-icon-effect-1a"
      >
        {platforms.map((platform) => {
          return (
            <Box
              as="a"
              href="#"
              _hover={{
                bg: 'rgba(255,255,255,1)',
                color: 'red' || '#41ab6b' // Define custom hover color if needed
              }}
              className={`hi-icon hi-icon-${platform.name}`}
            >
              {platform.name}
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}
