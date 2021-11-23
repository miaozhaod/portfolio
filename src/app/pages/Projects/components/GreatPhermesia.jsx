import { Wrapper, SubHeading, Paragraph } from "app/components";
import {
  ProjectTitle,
  ProjectCard,
  ProjectImage,
  ProjectDescription,
  ProjectTools,
  Tag,
} from "./components";
import GreatPhermesiaImg from "app/assets/great-phermesia.png";

export default function GreatPhermesia() {
  return (
    <Wrapper id="react">
      <ProjectTitle>
        <SubHeading>Great Phermesia</SubHeading>
        <Paragraph>
          A community management platform for a North-America Minecraft realm,
          intended for a player base estimated at 300 to share content
        </Paragraph>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://greatphermesia-uat.mianora.top/"
          src={GreatPhermesiaImg}
          alt="Great Phermesia Forum"
        />
        <ProjectDescription>
          <Paragraph>
            Worked as a developer in a team of 6 Developers, 2 DevOps and 1
            Business Analyst. Developed in an Agile environment. Implemented the
            client-side code with React functional components, managed states
            via React-redux across multiple components.
          </Paragraph>
          <ProjectTools href="https://greatphermesia-uat.mianora.top/">
            <Tag>React</Tag>
            <Tag>React Hook</Tag>
            <Tag>React-redux</Tag>
            <Tag>RESTful API</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
