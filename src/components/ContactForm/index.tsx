import { Row, Col } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { Container, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { FormGroup, Span, ButtonContainer } from "./styles";
import { handleSubmit } from "../../common/utils/googleFormsSubmit"

const Contact = ({ title, content, id }: ContactProps) => {

  const { values, errors, handleChange } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  const icp = useColorModeValue("#18216d", "white");

  return (
    <Container id={id} maxW="160ch" mb={10}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Heading color={icp}>
              {title}
            </Heading>
            <Text color={icp}>{content}</Text>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={e => handleSubmit(e, values, alert("Inscrição realizada com sucesso"))}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                  placeholder="Curso"
                  value={values.message || ""}
                  name="course"
                  onChange={handleChange}
                />
                <ValidationType type="course" />
              </Col>
              <ButtonContainer>
                <Button
                  mt="6"
                  bg="purple.500"
                  size="lg"
                  name="submit"
                  type="submit"
                >
                  Realizar inscrição
                </Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
