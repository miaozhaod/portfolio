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
import AComosusImg from "app/assets/a-comosus.png";

export default function AComosus() {
  return (
    <Wrapper id="react">
      <ProjectTitle>
        <SubHeading>A Comosus</SubHeading>
        <Paragraph>A replica of linktree</Paragraph>
        <ProjectTime>2022 May - Present</ProjectTime>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://uat.a-comosus.link/"
          src={AComosusImg}
          alt="A Comosus"
        />
        <ProjectDescription>
          <Paragraph>
            As a Full-stack Developer, I am working closely with the DevOps,
            Business Analysts and UX Designers to deliver in an agile
            environment.
          </Paragraph>
          <ProjectTools href="https://uat.a-comosus.link/">
            <Tag>TypeScript</Tag>
            <Tag>NextJS</Tag>
            <Tag>NestJS</Tag>
            <Tag>GraphQL API</Tag>
            <Tag>Serverless Framework</Tag>
            <Tag>AWS Lambda</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
