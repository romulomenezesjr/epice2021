import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

import {handleSubmit} from "../../common/utils/googleFormsSubmit"

const Contact = ({ title, content, id, t }: ContactProps) => {
  
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

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
        <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={ e => handleSubmit(e,values,alert("Inscrição realizada com sucesso"))}>
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
                <Button name="submit">{t("Realizar inscrição")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>

       
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
