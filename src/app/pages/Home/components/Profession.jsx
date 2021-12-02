import { HashLink as Link } from "react-router-hash-link";
import {
  SubHeading,
  Wrapper,
  List,
  ListCategory,
  ListItem,
  Highlighter,
} from "app/components";
import { Title, Details, LinkToProject } from "./components";

export default function Profession() {
  return (
    <Wrapper>
      <Title>
        <SubHeading>MY PROFESSION</SubHeading>
      </Title>
      <Details>
        <List>
          <ListCategory>WHO I AM</ListCategory>
          <ListItem>
            I see myself as a <Highlighter>junior-level</Highlighter> web
            developer with a focus on front-end at this stage
          </ListItem>
          <ListItem>
            I am <Highlighter>growing</Highlighter> myself into a professional
            full-stack web developer
          </ListItem>
          <ListCategory>WHAT I AM DOING</ListCategory>
          <ListItem>
            I am honing my skills in <Highlighter>React and NodeJS</Highlighter>{" "}
            by doing some side{" "}
            <Link to="/projects#react">
              <LinkToProject>projects</LinkToProject>
            </Link>
          </ListItem>
          <ListItem>
            I am broadening my tech stack by exploring more technologies, like
            cloud services - AWS Amplify / Route 53 / API Gateway / Lambda
          </ListItem>
          <ListCategory>WHAT I DID BEFORE</ListCategory>
          <ListItem>
            I have a two-year background in{" "}
            <Highlighter>User Experience Research</Highlighter>, which
            challenges me to always keep users in mind when creating things
          </ListItem>
          <ListItem>
            I delivered several web{" "}
            <Link to="/projects#craft">
              <LinkToProject>projects</LinkToProject>
            </Link>
            through twig and SCSS based on the Craft Content Management System,
            which developed my mindset in creating{" "}
            <Highlighter>re-usable modules</Highlighter> and writing readable
            codes
          </ListItem>
        </List>
      </Details>
    </Wrapper>
  );
}
