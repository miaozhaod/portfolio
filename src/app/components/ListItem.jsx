import React from "react";

export default function ListItem({ children }) {
  return (
    <li className="tracking-wide leading-7 text-gray-300 list-outside ml-5">
      <span className="text-gray-600">{children}</span>
    </li>
  );
}
