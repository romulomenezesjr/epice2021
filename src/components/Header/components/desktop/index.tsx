import { HStack } from '@chakra-ui/react';
import { Link } from "react-scroll";
import LinkButton from '../LinkButton';
const DURATION = 1000;
export default function Desktop() {
  return (
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
  )
}