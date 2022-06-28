import { Wrapper, Heading, List, Paragraph } from "app/components";
import Profile from "app/assets/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Wrapper align="items-center" gap="gap-10">
      <div className="w-1/2 md:w-1/4 md:max-w-7xl">
        <img src={Profile} alt="profile" className="rounded-full" />
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-3/4">
        <Heading>Welcome ! I'm Miao </Heading>
        <List>
          <Paragraph>
            I am a full-stack developer who enjoys writing clean codes and
            creating easy-to-use interfaces.
          </Paragraph>
          <Paragraph>
            With a background in UX, I enjoy the process to make design alive
            through coding
          </Paragraph>
          <Paragraph>
            Please feel free to look around, or hit the &nbsp;
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
            </Link>
            &nbsp; - I would be happy to hear from you and have a chat.
          </Paragraph>
        </List>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/miao-zhao-d/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-gray-500 hover:text-green-500"
            />
          </a>
          <a
            href="https://github.com/miaozhaod"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-gray-500 hover:text-green-500"
            />{" "}
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
