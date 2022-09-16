import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Paragraph, SubHeading } from "app/components";

export default function ContactDetails() {
  return (
    <div className="w-full md:w-1/4 py-10">
      <SubHeading>Thanks !</SubHeading>
      <div className="py-4">
        <Paragraph>Brsibane QLD 4000 AU</Paragraph>
        <a
          href="mailto:miao_zhao@yahoo.com?subject = Feedback&body = Message"
          className="font-extralight tracking-wide leading-7 text-gray-600 hover:text-green-500"
        >
          miao_zhao@yahoo.com
        </a>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col items-center justify-center w-8 h-8 border border-green-500 text-green-500 rounded-full">
          <a
            href="https://www.linkedin.com/in/miaozhaod/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center w-8 h-8 border border-green-500 text-green-500 rounded-full">
          <a
            href="https://github.com/miaozhaod"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
