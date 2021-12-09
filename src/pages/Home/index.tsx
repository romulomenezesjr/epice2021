import { lazy, Fragment } from "react";
import {
  Box,
  Container as ChakraContainer,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import RegistrationContent from "../../content/RegistrationContent.json";
import MeetingContent from "../../content/MeetingContent.json";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const PageTransition = lazy(() => import("../../common/Transition"));
const HomeHero = lazy(() => import("../../components/Hero"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MyTimeline = lazy(() => import("../../components/MyTimeline"));
const Contact = lazy(() => import("../../components/ContactForm"));

export default function Home() {
  return (
    <Fragment>
      <ScrollToTop />
      <PageTransition>
        <HomeHero
          title={IntroContent.title}
          subtitle={IntroContent.text}
          button={IntroContent.buttontext}
        />
      </PageTransition>
        <MiddleBlock
          title={AboutContent.title}
          content={AboutContent.text}
          directions={AboutContent.directions}
          id={AboutContent.id}
          img={AboutContent.img}
        />

      <ContentBlock />
      <MyTimeline />
      <ContentTable
        title={MeetingContent.title}
        subtitle={MeetingContent.text}
      />
      <Contact
        title={RegistrationContent.title}
        content={RegistrationContent.text}
        id="contact"
      />
    </Fragment>
  );
};
type ContentProps = {
  title: string;
  subtitle: string;
}
const ContentTable: React.FC<ContentProps> = ({ title, subtitle }) => {
  return (
    <Box as="section" id="mesa-redonda">
      <ChakraContainer maxW='7xl' py={{ base: 14 }}>
        <Box
          rounded={'xl'}
          color={useColorModeValue('white', 'gray.100')}
          px={{ base: 4, md: 10 }}
          py={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box maxW="90%" mt={10}>
              <Heading as={'h3'} mb={2}>
                {title}
              </Heading>
              <Text fontSize={'lg'}>
                {subtitle}
              </Text>
            </Box>
            <Flex w={'full'} align={'center'} justify={'center'}>
              <Image
                src={
                  'img/svg/grupo.png'
                }
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </ChakraContainer>
    </Box>
  );
}
