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
import UxImg from "app/assets/lg-air-sketches.jpeg";

export default function CraftExample() {
  return (
    <Wrapper id="craft">
      <ProjectTitle>
        <SubHeading>Air Purifier | LG China</SubHeading>
        <ProjectTime>2016</ProjectTime>
        <Paragraph>
          A project originated from the severe air pollution issue in China
          aiming to help LG’s air purifier products to win in the “smoggy
          economy“ in China targeting at Chinese new middle-class customers.
        </Paragraph>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage src={UxImg} alt="UX LG" />
        <ProjectDescription>
          <Paragraph>
            I was mainly responsible for the UX research stage of the project
            and the initial sketches generation.
          </Paragraph>
          <ProjectTools>
            <Tag>Interview</Tag>
            <Tag>User Journey</Tag>
            <Tag>Persona</Tag>
            <Tag>Pen and Paper</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
