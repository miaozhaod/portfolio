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
import CraftImg from "app/assets/craft-example.png";

export default function InspireLiteracy() {
  return (
    <Wrapper id="craft">
      <ProjectTitle>
        <SubHeading>Inspire Literacy</SubHeading>
        <ProjectTime>2019 Nov</ProjectTime>
        <Paragraph>
          A web page dedicated to allowing the client to advertise their
          business of Multisensory Structural Language Education
        </Paragraph>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://inspireliteracy.com.au/"
          src={CraftImg}
          alt="Inspire Literacy"
        />
        <ProjectDescription>
          <Paragraph>
            The project was developed under CraftCMS with re-usable and flexible
            modules to allow the client to customise and maintain the site
            easily.
          </Paragraph>
          <ProjectTools href="https://inspireliteracy.com.au/">
            <Tag>CraftCMS</Tag>
            <Tag>twig</Tag>
            <Tag>TailwindCSS</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
