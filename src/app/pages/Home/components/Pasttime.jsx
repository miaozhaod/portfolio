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
            I love digital drawing and painting -{" "}
            <Highlighter>Procreate</Highlighter> is my favourite!
          </ListItem>
          <ListItem>I like hiking and travelling.</ListItem>
          <ListItem>
            I also enjoy a catch-up time with friends having a cuppa.{" "}
          </ListItem>
        </List>
      </Details>
    </Wrapper>
  );
}
