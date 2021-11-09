import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import LectureContent from "../../content/LectureContent.json";
import ScheduleContent from "../../content/ScheduleContent.json";
import MeetingContent from "../../content/MeetingContent.json";
import RegistrationContent from "../../content/RegistrationContent.json";
import { Timeline } from "antd";
import MyTimeline from "../../components/MyTimeline";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button}
      />
      <ContentBlock
        type="left"
        title={LectureContent.title}
        content={LectureContent.text}
        section={LectureContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={ScheduleContent.title}
        content={ScheduleContent.text}
        icon="calendar2.jpg"
        id="mission"
      />
      <MyTimeline
       title={AboutContent.title}
       content={AboutContent.text}
       button={AboutContent.button}
       ></MyTimeline>


       
      <ContentBlock
        type="left"
        title={MeetingContent.title}
        content={MeetingContent.text}
        icon="grupo.png"
        id="product"
      />
      <Contact
        title={RegistrationContent.title}
        content={RegistrationContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
