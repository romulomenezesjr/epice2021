import React from 'react';
import { Jumbotron } from '../../common/';
import { Heading, Image, Skeleton, Text } from '@chakra-ui/react';
interface MiddleBlockProps {
  title: string;
  content: string;
  id: number;
  directions: string;
  img: string;
}
const MiddleBlock: React.FC<MiddleBlockProps> = ({ title, content, id, directions, img }) => {
  return (
    <Jumbotron.Container>
      <Jumbotron key={id} directions={directions}>
        <Jumbotron.Pane>
          <Heading>{title}</Heading>
          <Text fallback={<Skeleton />}>
            {content}
          </Text>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Image id={`id${id}`} src={img} alt={title} fallback={<Skeleton />} />
        </Jumbotron.Pane>
      </Jumbotron>
    </Jumbotron.Container>
  );
};

export default MiddleBlock;