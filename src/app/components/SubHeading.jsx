import React from "react";

export default function SubHeading({ children }) {
  return (
    <h2 className="text-xl tracking-wide font-semibold uppercase text-gray-600">
      {children}
    </h2>
  );
}
