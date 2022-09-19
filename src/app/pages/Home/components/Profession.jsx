import {
  SubHeading,
  Wrapper,
  List,
  ListCategory,
  ListItem,
  Highlighter,
} from "app/components";
import { Title, Details } from "./components";
import { Link } from "react-router-dom";

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
            I see myself as a{" "}
            <Highlighter>junior full-stack developer</Highlighter> with a focus
            on front-end at the moment
          </ListItem>
          <ListCategory>WHAT I CAN DO</ListCategory>
          <ListItem>
            I worked on most of my front-end web projects through{" "}
            <Highlighter>ReactJS, NextJS</Highlighter>
          </ListItem>
          <ListItem>
            I am growing my skills in the backend by working on some
            side-projects in <Highlighter>NodeJS - Express, NestJS</Highlighter>
          </ListItem>
          <ListItem>
            I write <Highlighter>RESTful API, GraphQL API</Highlighter>
          </ListItem>
          <ListItem>
            I am constantly exploring new technologies, recently looking into{" "}
            <Highlighter>serverless</Highlighter>.
          </ListItem>
          <ListItem>
            I have a three-year background in{" "}
            <Highlighter>UX design</Highlighter>, which challenges me to always
            keep users centred
          </ListItem>
          <ListCategory>WHERE I WANT TO BE</ListCategory>
          <ListItem>
            I am looking forward to my next career challenge as a{" "}
            <Highlighter>full-stack developer</Highlighter>.
          </ListItem>
        </List>
        <Link to="/projects">
          <button className="border solid border-green-500 text-green-500 text-sm py-2 px-3 rounded-lg mt-4 duration-1000 hover:shadow-lg">
            View my Web Projects
          </button>
        </Link>
      </Details>
    </Wrapper>
  );
}
