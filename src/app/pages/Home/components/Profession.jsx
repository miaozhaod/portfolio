import {
  SubHeading,
  Wrapper,
  List,
  ListCategory,
  ListItem,
  Highlighter,
} from "app/components";
import { Title, Details } from "./components";

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
            I see myself as a <Highlighter>junior</Highlighter> full-stack
            developer with a focus on front-end at the moment
          </ListItem>
          <ListCategory>WHAT I CAN DO</ListCategory>
          <ListItem>
            I worked on most of my front-end web projects through{" "}
            <Highlighter>ReactJS, NextJs</Highlighter>
          </ListItem>
          <ListItem>
            I am growing my skills in the backend by working on some
            side-projects in <Highlighter>NodeJS, NestJS</Highlighter>,
          </ListItem>
          <ListItem>
            I am constantly exploring new technologies, recently I'm looking
            into <Highlighter>serverless</Highlighter>.
          </ListItem>
          <ListItem>
            I have a three-year background in <Highlighter>UX</Highlighter>,
            which challenges me to always keep users centred
          </ListItem>
        </List>
      </Details>
    </Wrapper>
  );
}
