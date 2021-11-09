import React from "react";

export default function ProjectDescription({ children }) {
  return (
    <div className="flex flex-col gap-3 py-6 px-4 bg-gray-100 ">{children}</div>
  );
}
