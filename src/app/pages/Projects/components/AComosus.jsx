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
        <ProjectTime>2022 May - 2022 August</ProjectTime>
        <Paragraph>
          This project aimed to create a personalized profile-sharing web
          application. Users could add links from different social media and
          personal websites to personalize their profiles.
        </Paragraph>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://uat.a-comosus.link/"
          src={AComosusImg}
          alt="A Comosus"
        />
        <ProjectDescription>
          <Paragraph>
            As a Full-stack Developer, I was working closely with the DevOps,
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
