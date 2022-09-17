import {
  Wrapper,
  SubHeading,
  List,
  ListItem,
  Highlighter,
} from "app/components";
import { Details, Title } from "./components";

export default function Pasttime() {
  return (
    <Wrapper>
      <Title>
        <SubHeading>MY PAST-TIME</SubHeading>
      </Title>
      <Details>
        <List>
          <ListItem>
            🎨 I love watercolors, acrylics, and digital arts.
          </ListItem>
          <ListItem>🌏 I like exploring the beauty of the world.</ListItem>
          <ListItem>☕️ I also enjoy a catch-up time with friends. </ListItem>
        </List>
      </Details>
    </Wrapper>
  );
}
