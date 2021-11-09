import React from "react";

export default function LinkToProject({ children }) {
  return (
    <span className="transition ease-in-out duration-200 bg-gray-200 px-2 py-1 rounded-md hover:bg-green-500 hover:text-white">
      {children}
    </span>
  );
}
