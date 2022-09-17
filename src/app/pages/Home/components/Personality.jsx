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
          <ListItem>reliable, nice and fun</ListItem>
          <ListItem>
            a capable <Highlighter>learner</Highlighter> to new skills, an
            excellent <Highlighter>adapter</Highlighter> to new environment.
          </ListItem>
          <ListCategory>I STRIVE TO BE</ListCategory>
          <ListItem>
            <Highlighter>humble and helpful</Highlighter> to others
          </ListItem>
        </List>
      </Details>
    </Wrapper>
  );
}
