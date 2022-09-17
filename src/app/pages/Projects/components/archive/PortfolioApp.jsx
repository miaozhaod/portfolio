import { Wrapper, SubHeading, Paragraph } from "app/components";
import {
  ProjectTitle,
  ProjectTime,
  ProjectCard,
  ProjectImage,
  ProjectDescription,
  ProjectTools,
  Tag,
} from "../components";
import PortfolioImg from "app/assets/portfolio-app.png";

export default function PortfolioApp() {
  return (
    <Wrapper>
      <ProjectTitle>
        <SubHeading>MY SITE</SubHeading>
        <ProjectTime>2021 Sep</ProjectTime>
        <Paragraph>My personal portfolio</Paragraph>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://miaozhaod.github.io/portfolio/"
          src={PortfolioImg}
          alt="Portfolio APP"
        />
        <ProjectDescription>
          <Paragraph>
            This project aims to provide a brief introduction of myself and to
            present some project I have done.
          </Paragraph>
          <ProjectTools href="https://miaozhaod.github.io/portfolio/">
            <Tag>React</Tag>
            <Tag>React Router DOM</Tag>
            <Tag>TailwindCSS</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
