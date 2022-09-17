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
import PixelFotoImg from "app/assets/PixelFoto.png";

export default function PixelFoto() {
  return (
    <Wrapper id="react">
      <ProjectTitle>
        <SubHeading>PixelFoto</SubHeading>
        <ProjectTime>2022 June - 2022 August</ProjectTime>
        <ProjectTime>She Codes Individual Project</ProjectTime>
        <Paragraph>
          A crowdfunding platform to support photographers to open their
          exhibitions and to share their works.
        </Paragraph>
        <a
          href="https://pacific-reaches-34630.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="text-green-500"
        >
          View the site
        </a>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://pacific-reaches-34630.herokuapp.com/"
          src={PixelFotoImg}
          alt="PixelFoto"
        />
        <ProjectDescription>
          <Paragraph>
            As a Full-stack Developer, followed the She Codes mentors' guidance,
            I created the REST APIs in Django Rest Framework, and implemented
            the frontend UI through ReactJS.
          </Paragraph>
          <ProjectTools href="https://pacific-reaches-34630.herokuapp.com/">
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
