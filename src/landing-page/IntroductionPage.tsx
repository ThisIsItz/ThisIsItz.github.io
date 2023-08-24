import { Box, Button, Flex, Text } from '@chakra-ui/react'
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
      <Flex mt="150px">
        Hello, I'm
        <Text color={defaultColor} ml="10px">
          Itziar Urbieta.
        </Text>
      </Flex>
      I'm a remote frontend developer.
      <Flex
        gap="20px"
        justifyContent="center"
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
              href={platform.href}
              className={`hi-icon hi-icon-${platform.name}`}
              target="_blank"
            >
              {platform.name}
            </Box>
          )
        })}
      </Flex>
      <Flex marginTop="100px">
        <Button
          as="a"
          background="transparent"
          border={`3px solid ${defaultColor}`}
          color="white"
          w="fit-content"
          fontSize="20px"
          fontWeight="700"
          margin="auto"
          borderRadius="20px"
          h="50px"
          padding="20px 20px"
          _hover={{ bg: 'white', color: defaultColor }}
          letterSpacing={'1px'}
          href="#my-projects"
        >
          View My Projects
        </Button>
      </Flex>
    </Flex>
  )
}
