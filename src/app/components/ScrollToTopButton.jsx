import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { scrollToTop } from "app/functions/scrollToTop";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={scrollToTop}
      className="absolute bottom-0 right-5 md:right-0 text-xl md:text-4xl w-8 h-8 md:w-11 md:h-11 rounded-full text-green-500 animate-bounce hover:bg-green-500 hover:text-white"
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}
