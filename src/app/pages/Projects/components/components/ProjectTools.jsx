import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectTools({ children, href }) {
  return (
    <div className="flex items-end">
      <div className="flex gap-3 mr-auto flex-wrap">{children}</div>
      <a href={href} rel="noreferrer" target="_blank">
        <FontAwesomeIcon
          icon={faLink}
          className="fa-lg text-green-300 hover:text-black animate-pulse"
        />
      </a>
    </div>
  );
}
