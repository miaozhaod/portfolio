import React from "react";

export default function Tag({ children }) {
  return (
    <span className="text-sm font-normal tracking-wide leading-7 text-gray-600 px-4 border border-green-400 rounded-3xl w-max">
      {children}
    </span>
  );
}
