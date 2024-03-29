import { Wrapper, Heading, List, Paragraph } from "app/components";
import Profile from "app/assets/Intersect.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Wrapper align="items-center" gap="gap-10">
      <div className="d-flex items-center w-1/2 md:w-1/4 md:max-w-7xl">
        <div className="md:w-52 md:h-52 mr-auto ml-auto md:mr-auto md:ml-0">
          <img
            src={Profile}
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-start text-left md:items-start md:text-left w-full md:w-3/4">
        <Heading>I'm Miao 👋 </Heading>
        <List>
          <Paragraph>👩‍💻 I am a developer who designs.</Paragraph>
          <Paragraph>
            🥰 I revel every moment a feature is fulfilled, a bug is fixed, a
            codebase is optimised, a UI is becoming more user-friendly, or a new
            skill is mastered.
          </Paragraph>
          <Paragraph>
            📧 Please feel free to look around, or hit the &nbsp;
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
            </Link>
            &nbsp; - I would be happy to hear from you and have a chat.
          </Paragraph>
        </List>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/miaozhaod/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-gray-500 text-xl duration-1000 hover:text-green-500 "
            />
          </a>
          <a
            href="https://github.com/miaozhaod"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-gray-500 text-xl duration-1000 hover:text-green-500"
            />{" "}
          </a>
        </div>
        <Link to="/projects">
          <button className="bg-green-500 text-white text-sm py-2 px-3 rounded-lg mt-4 duration-1000 hover:shadow-lg">
            View my Web Projects
          </button>
        </Link>
      </div>
    </Wrapper>
  );
}
