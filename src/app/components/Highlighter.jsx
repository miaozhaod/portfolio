import React from "react";

export default function Highlighter({ children }) {
  return (
    <em className="relative">
      {children}
      <div className="absolute bottom-0 left-0 w-full border-4 border-green-200 -z-10"></div>
    </em>
  );
}
