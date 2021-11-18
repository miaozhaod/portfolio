import { Wrapper, Heading, List, Paragraph } from "app/components";
import Profile from "app/assets/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            I am a web developer who enjoys creating clean and easy-to-use
            things.
          </Paragraph>
          <Paragraph>
            I enjoy the process to make design alive through the development
          </Paragraph>
          <Paragraph>
            Please feel free to look around, or hit the &nbsp;
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
            </Link>
            &nbsp; - I would be happy to hear from you and have a chat.
          </Paragraph>
        </List>
      </div>
    </Wrapper>
  );
}
