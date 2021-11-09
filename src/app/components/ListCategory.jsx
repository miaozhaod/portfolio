import React from "react";

export default function ListCategory({ children }) {
  return (
    <li className="font-extralight tracking-wide leading-7 text-transparent mt-4 first:mt-0">
      <span className="text-gray-600 ">{children}</span>
    </li>
  );
}
