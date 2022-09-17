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
        {/* <Paragraph>
          A personalized profile-sharing web application. Users could add links
          from different social media and personal websites to personalize their
          profiles.
        </Paragraph> */}
        <Paragraph>
          😴 This project has stopped maintenance, some Lambda functions's API
          Gateway endpoint is not working in the{" "}
          <a
            href="https://uat.a-comosus.link/"
            target="_blank"
            rel="noreferrer"
            className="text-green-600"
          >
            live site
          </a>
          , please be patient and play around in:
        </Paragraph>{" "}
        <a
          href="localhost:3000"
          target="_blank"
          rel="noreferrer"
          className="text-green-500"
        >
          localhost:3000
        </a>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://uat.a-comosus.link/"
          src={AComosusImg}
          alt="A Comosus"
        />
        <ProjectDescription>
          <Paragraph>
            As a Full-stack Developer, I was focusing on improving my backend
            skills and exploring some AWS services - Lambda, API Gateway, and S3
            Bucket in this project.
          </Paragraph>
          <Paragraph>
            I implemented the user verification process and forget password flow
            through Lambda function to send emails via nodemailer, and achieved
            the user avatar update through uploading the file to S3 bucket
          </Paragraph>
          <ProjectTools href="https://uat.a-comosus.link/">
            <Tag>NextJS</Tag>
            <Tag>NestJS</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Chakra UI</Tag>
            <Tag>GraphQL API</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Serverless Framework</Tag>
            <Tag>AWS Lambda</Tag>
            <Tag>AWS API Gateway</Tag>
            <Tag>AWS S3 Bucket</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
