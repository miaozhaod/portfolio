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
        <ProjectTime>She Codes Group Project</ProjectTime>
        <Paragraph>
          The aim of Thinkle is to connect workshop organisers and mentors all
          in the one convienient location.
        </Paragraph>
        <a
          href="https://guarded-beyond-50913.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="text-green-500"
        >
          View the site
        </a>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://guarded-beyond-50913.herokuapp.com/"
          src={ThinkLeImg}
          alt="ThinkLe"
        />
        <ProjectDescription>
          <Paragraph>
            As a Frontend Developer, I designed and planned the project in
            Figma, and setted up the frontend project structure with common
            components and modules aligned to our pages, and built up the UI
            components in ReactJS, used CSS3 for the styles and responsive
            design, utlised Fetch API to interact with backend RESTful API.
          </Paragraph>
          <ProjectTools href="https://guarded-beyond-50913.herokuapp.com/">
            <Tag>ReactJS</Tag>
            <Tag>React Router DOM</Tag>
            <Tag>CSS3</Tag>
            <Tag>Restful API</Tag>
            <Tag>Django Rest Framework</Tag>
            <Tag>PostgreSQL</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
