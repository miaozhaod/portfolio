import { Wrapper, SubHeading, Paragraph } from "app/components";
import {
  ProjectTitle,
  ProjectTime,
  ProjectCard,
  ProjectImage,
  ProjectDescription,
  ProjectTools,
  Tag,
} from "./components";
import ThinkLeImg from "app/assets/Thinkle.png";

export default function PixelFoto() {
  return (
    <Wrapper id="react">
      <ProjectTitle>
        <SubHeading>ThinkLe</SubHeading>
        <ProjectTime>2022 August - 2022 Sepetember</ProjectTime>
        <Paragraph>
          As part of the 2022 She Codes Australia Plus program, six freshly
          minted developers were tasked with the challenge of creating a product
          that would serve the tech community. The aim of Thinkle is to connect
          workshop organisers and mentors all in the one convienient location.
        </Paragraph>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://guarded-beyond-50913.herokuapp.com/"
          src={ThinkLeImg}
          alt="ThinkLe"
        />
        <ProjectDescription>
          <Paragraph>
            As a Frontend Developer, I setted up the project structure with
            common components and modules aligned to our pages, and built up the
            UI components in ReactJS, utlised fetch to interact with API.
          </Paragraph>
          <ProjectTools href="https://guarded-beyond-50913.herokuapp.com/">
            <Tag>ReactJS</Tag>
            <Tag>React Router DOM</Tag>
            <Tag>Restfull API</Tag>
            <Tag>Django Rest Framework</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
