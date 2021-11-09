import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { TimelineSection, Content, ContentWrapper } from "./styles";
import "./styles.css";

interface TimelineProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MyTimeline = ({ title, content, button, t }: TimelineProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <TimelineSection>
      <Slide direction="up">
        <ContentWrapper>
          <Col>
            <div className="timeline">
              <div className="container left">
                <div className="content">
                  <h2>30/11</h2>
                  <p>19:00 - Abertura</p>
                  <p>20:00 - Palestra Inaugural</p>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <h2>01/12</h2>
                  <p>19:00 - Mesa Redonda</p>
                  <p>20:00 - Palestra 1</p>
                  <p>21:00 - Palestra 2</p>
                </div>
              </div>
              <div className="container left">
                <div className="content">
                  <h2>02/12</h2>
                  <p>19:00 - Palestra 3</p>
                  <p>20:00 - Palestra 4</p>
                  <p>21:00 - Encerramento</p>
                </div>
              </div>
            </div>
          </Col>

        </ContentWrapper>
      </Slide>
    </TimelineSection>
  );
};

export default withTranslation()(MyTimeline);
