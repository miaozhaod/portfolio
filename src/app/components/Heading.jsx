import React from "react";

export default function Heading({ children }) {
  return (
    <>
      <h1
        data-text={children}
        className="relative text-3xl md:text-5xl font-black uppercase leading-10 text-gray-800 mb-6"
      >
        {children}
      </h1>
    </>
  );
}
