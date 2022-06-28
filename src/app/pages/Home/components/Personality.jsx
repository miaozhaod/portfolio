import {
  SubHeading,
  Wrapper,
  List,
  ListCategory,
  ListItem,
  Highlighter,
} from "app/components";
import { Title, Details } from "./components";

export default function Personality() {
  return (
    <Wrapper>
      <Title>
        <SubHeading>MY PERSONALITY</SubHeading>
      </Title>
      <Details>
        <List>
          <ListCategory>OTHERS DESCRIBE ME AS</ListCategory>
          <ListItem>fun, reliable and kind </ListItem>
          <ListItem>
            a capable <Highlighter>learner</Highlighter> to new things, an
            excellent <Highlighter>adapter</Highlighter> to a new environment.
          </ListItem>
          <ListCategory>I STRIVE TO BE</ListCategory>
          <ListItem>humble </ListItem>
          <ListItem>
            supportive and <Highlighter>helpful to others</Highlighter>
          </ListItem>
        </List>
      </Details>
    </Wrapper>
  );
}
