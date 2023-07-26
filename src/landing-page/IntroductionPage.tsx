import { Flex, Link, Text, keyframes } from '@chakra-ui/react'
import React from 'react'
import GithubIcon from '../icons/GithubIcon.tsx'
import LinkedinIcon from '../icons/LinkedinIcon.tsx'
import TwitterIcon from '../icons/TwiterIcon.tsx'

const platforms = [
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/itziarurbieta/'
  },
  {
    icon: <GithubIcon />,
    href: 'https://github.com/ThisIsItz'
  },
  { icon: <TwitterIcon />, href: 'https://twitter.com/ItUnderTheSea' }
]

const defaultColor = '#f2bb16'

export default function IntroductionPage() {
  return (
    <Flex
      flexDir="column"
      alignSelf="center"
      fontSize="60px"
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
      >
        {platforms.map((platform) => {
          return (
            <Flex
              borderRadius="100px"
              border={`2px solid ${defaultColor}`}
              w="50px"
              h="50px"
              justifyContent="center"
              alignItems="center"
              _hover={{
                bg: '#fff',
                border: '2px solid white',
                svg: { fill: defaultColor }
              }}
            >
              <Link href={platform.href} isExternal>
                {platform.icon}
              </Link>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}
