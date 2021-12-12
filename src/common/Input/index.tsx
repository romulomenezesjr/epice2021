import React from 'react'
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, type }: InputProps) => {
  return (
    <InputGroup>
      <InputLeftElement
        width="3rem"
        height="100%"
        color="black"
      />
      <ChakraInput
        required
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        backgroundColor="gray.800"
        focusBorderColor="purple.500"
        rounded="lg"
      />
    </InputGroup>
  )
};

export default Input
