import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, type }: InputProps) => (
  <InputGroup>
    <InputLeftElement
      width="3rem"
      height="100%"
      color='#000'
      _focus={{ color: '#fff' }}
    />
    <ChakraInput
      required
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      focusBorderColor="purple.500"
      bg="gray.200"
      _hover={{
        bg: 'gray.100'
      }}
      rounded="lg"
    />
  </InputGroup>
);

export default Input
