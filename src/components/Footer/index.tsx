import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
} from "./styles";
import { Image } from "../../common/Image";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Parceiros")}</Title>
              <p> 
                Pariatur et qui laboris incididunt sunt.
              </p>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
            <Title>{t("Parceiros")}</Title>
              <p> 
                Deserunt eiusmod labore aliqua consequat sint excepteur non commodo pariatur veniam.
              </p>
            </Col>            
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Parceiros")}</Title>
              <p> 
                Aute velit eiusmod proident deserunt deserunt cillum sunt anim do aliquip duis.
              </p>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
            <Title>{t("Parceiros")}</Title>
              <p> 
                Deserunt cillum tempor sint dolore pariatur aliquip tempor.
              </p>
            </Col>            
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <Image
                  src="epice.png"
                  aria-label="homepage"
                  width="300px"
                  height="100px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/romulomenezesjr/epice2021"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/epice2021"
                src="twitter.svg"
              />
              <SocialLink
                href="https://instagram.com/epice2021"
                src="instagram.svg"
              />
              
              
              <Image  src="ifpb.png" width="50" height="60"/>

              
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
