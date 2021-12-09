import { Heading, Container, Text, Stack, Box } from '@chakra-ui/react'
// import "./styles.css";
import { TimelineSection } from './styles'
const MyTimeline = () => {
  return (
    <Box id="mission" py={30}>
      <Container maxW="180ch">
        <Heading mb={2} mt={30}>Programação:</Heading>
        <Text mb={3}>De terça-feira, 30/11, à quinta-feira, 02/12.</Text>
        <TimelineSection>
          <div className="container left">
            <Stack>
              <div className="content">
                <Heading>30/11</Heading>
                <Text mb={1}>19:00 - Abertura</Text>
                <Text mt={1}>19:30 - <b>Francisco Sousa</b> - Perspectivas para
                  mercado de tecnologia da informação na Paraíba e
                  habilidades mais importantes para construir uma carreira.
                </Text>
              </div>
            </Stack>
          </div>
          <div className="container right">
            <Stack>
              <div className="content">
                <Heading>01/12</Heading>
                <Text>
                  19:00 - <b>Alexsandra Macedo, Edmilson Zacarias e Álvaro Getúlio</b> -
                  Mesa Redonda com ex-alunos do curso de Informática irão falar
                  sobre suas experiências após a conclusão do curso de Informática
                </Text>
              </div>
            </Stack>
          </div>
          <div className="container left">
            <Stack>
              <div className="content">
                <Heading>02/12</Heading>
                <Text mb={1}>
                  19:00 - <b>Wesley Porto</b> - Boas práticas de rede com
                  Mikrotik/RouterOS para redes corporativas e servidores de internet.
                </Text>
                <Text mb={1}>
                  20:00 - <b>Ivomar B. Soares</b> - Nessa apresentação irei compartilhar como é
                  trabalhar como engenheiro de software para uma grande empresa de software
                  como a Microsoft.
                </Text>
                <Text>
                  21:00 - <b>Renata Kelly</b> - Comunidade Potiguaras Valley, @TI{'<forGIRLS>'} e desenvolvedora mobile.
                </Text>
              </div>
            </Stack>
          </div>
        </TimelineSection>
      </Container>
    </Box>
  );
};

export default MyTimeline;
