import { ButtonProps } from "../types";
import { Button as ChakraButton } from '@chakra-ui/react'
export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  ...props
}: ButtonProps) => (
  <ChakraButton
    rounded={'full'}
    size={'lg'}
    fontWeight={'normal'}
    px={6}
    color='white'
    maxW="70%"
    _hover={{ bg: `${color}.500` }}
    onClick={onClick}
    {...props}
  >
    {children}
  </ChakraButton>
);
