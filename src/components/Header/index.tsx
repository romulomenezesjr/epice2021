/* eslint-disable */
import React from 'react';
import {
  Box, Button, chakra, CloseButton, Flex, HStack,
  IconButton, VisuallyHidden, VStack, useDisclosure, useColorModeValue, useColorMode
} from '@chakra-ui/react';
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
const DURATION = 1000;
import { AiOutlineMenu } from 'react-icons/ai';
export default function NavHero() {
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <React.Fragment>
      <chakra.header
        borderTop="10px solid #8257e5"
        shadow="md"
        transition="all 0.5s ease-in-out"
        pos="fixed"
        top="0"
        zIndex="modal"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        mb={2}
        boxShadow="none"
        bg={useColorModeValue("#ffffffd6", "#1a202cd1")}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" as="nav">
          <Flex>
            <chakra.a
              href="/"
              title="EPICE 2021"
              display="flex"
              alignItems="center"
            >

              <VisuallyHidden>EPICE 2021</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2" color={useColorModeValue("#18216d", "white")}>
              EPICE 2021
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <LinkButton>
                <Link
                  to="palestras"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                >
                  Palestras
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  to="mesa-redonda"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                  style={{
                    paddingLeft: '10px'
                  }}
                >
                  Mesa Redonda
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  to="mission"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                  style={{
                    paddingLeft: '10px'
                  }}
                >
                  Programação
                </Link>
              </LinkButton>
            </HStack>
            <HStack spacing={1} direction='row'>
              <Button
                bg="purple.500"
                color="white"
                size="sm"
                _hover={{
                  bg: 'purple.600'
                }}>
                <Link
                  to="contact"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                  style={{
                    color: 'currentcolor'
                  }}
                >
                  Inscrições
                </Link>
              </Button>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${colorMode === 'light' ? 'Dark' : 'Light'} mode`}
                bg="gray.500"
                _hover={{ bg: 'gray.600' }}
                color="white"
                ml={{ base: "0", md: "3" }}
                onClick={toggleColorMode}
                icon={colorMode !== 'light' ? <FaMoon /> : <FaSun />}
              />
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color='black'
                variant="ghost"
                onClick={mobileNav.onOpen}
                icon={<AiOutlineMenu />}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="white"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <LinkButton>
                  <Link
                    to="palestras"
                    spy={false}
                    smooth="easeInOutQuart"
                    duration={DURATION}
                    activeClass="active"
                  >
                    Palestras
                  </Link>
                </LinkButton>
                <LinkButton>
                  <Link
                    to="mesa-redonda"
                    spy={false}
                    smooth="easeInOutQuart"
                    duration={DURATION}
                    activeClass="active"
                    style={{
                      paddingLeft: '10px'
                    }}
                  >
                    Mesa Redonda
                  </Link>
                </LinkButton>
                <LinkButton>
                  <Link
                    to="mesa-redonda"
                    spy={false}
                    smooth="easeInOutQuart"
                    duration={DURATION}
                    activeClass="active"
                    style={{
                      paddingLeft: '10px'
                    }}
                  >
                    Programação
                  </Link>
                </LinkButton>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment >
  );
};
type LinkProps = {
  children?: React.ReactNode;
}
const LinkButton = ({ children }: LinkProps) => {
  return (
    <chakra.p
      fontSize="18px"
      fontWeight='bold'
      _hover={{
        color: 'rgb(255, 130, 92)',
        textUnderlinePosition: 'under',
        textDecoration: 'rgb(255, 130, 92) wavy underline'
      }}
      _active={{
        color: 'rgb(255, 130, 92)',
        textUnderlinePosition: 'under',
        textDecoration: 'rgb(255, 130, 92) wavy underline'
      }}
    >
      {children}
    </chakra.p>
  )
}