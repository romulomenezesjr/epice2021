import React from 'react'
import {
  CloseButton, VStack, useDisclosure, useColorModeValue, Box, IconButton
} from '@chakra-ui/react';
import { Link } from "react-scroll";
import LinkButton from '../LinkButton/'
import { AiOutlineMenu } from 'react-icons/ai';
const DURATION = 1000;

export default function Mobile() {
  const mobileNav = useDisclosure();
  return (
    <Box display={{ base: "inline-flex", md: "none" }}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        boxShadow={"none"}
        bg={useColorModeValue("gray.50", "#464460")}
        _hover={{ bg: useColorModeValue("gray.50", "#464460")}}
        color={useColorModeValue("gray.800", "white")}
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
        bg={useColorModeValue("white", "#1a202cd1")}
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
      </VStack>
    </Box>
  )
}