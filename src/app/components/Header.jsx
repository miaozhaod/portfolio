import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const [display, setDisplay] = useState("hidden");

  const handleBarsClick = () => {
    display === "hidden" ? setDisplay("block") : setDisplay("hidden");
  };

  const controlDisplayAfterSelectMenuOption = () => {
    setDisplay("hidden");
  };

  return (
    <header className="flex flex-col items-center border-b py-6 text-gray-600">
      <div className="flex flex-row items-center w-screen max-w-screen-xl gap-12 px-6 xl:px-0 uppercase relative">
        <div
          className="mr-auto font-semibold"
          onClick={controlDisplayAfterSelectMenuOption}
        >
          <Link to="/">MIAO ZHAO</Link>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex gap-10">
            <li className="font-extralight">
              <Link to="/projects">
                <span className="transition duration-200 ease-linear pb-7 hover:text-green-500 hover:border-b-2 hover:border-green-500">
                  Projects
                </span>
              </Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={handleBarsClick} className="block sm:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav
          className={`${display} bg-white w-full absolute top-12 right-0 z-50 shadow-md`}
        >
          <ul className="grid grid-cols-1 divide-y divide-green-300 text-center">
            <li
              className="font-extralight py-2"
              onClick={controlDisplayAfterSelectMenuOption}
            >
              <Link to="/projects">
                <span className="transition duration-200 ease-linear hover:text-green-500 ">
                  Projects
                </span>
              </Link>
            </li>
            <li className="py-2" onClick={controlDisplayAfterSelectMenuOption}>
              <Link to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
