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
        <Paragraph>
          This project is from my She Codes Plus study. I developed a
          crowdfunding platform to support photographers to open exhibitions, to
          share their works, and get to grow.
        </Paragraph>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://pacific-reaches-34630.herokuapp.com/"
          src={PixelFotoImg}
          alt="PixelFoto"
        />
        <ProjectDescription>
          <Paragraph>
            As a Full-stack Developer, I created the rest APIs in Django Rest
            Framework, and implemented the frontend UI through ReactJS.
          </Paragraph>
          <ProjectTools href="https://pacific-reaches-34630.herokuapp.com/">
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
