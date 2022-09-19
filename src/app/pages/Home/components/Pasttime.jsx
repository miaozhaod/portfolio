import { Link } from "react-router-dom";
import { Wrapper, SubHeading, List, ListItem } from "app/components";
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
        <Link to="/arts">
          <button className="border solid border-green-500 text-green-500 text-sm py-2 px-3 rounded-lg mt-4 duration-1000 hover:shadow-lg">
            View my Artworks
          </button>
        </Link>
      </Details>
    </Wrapper>
  );
}
