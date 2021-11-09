import React from "react";

export default function ProjectCard({ children }) {
  return (
    <div className="w-full md:w-3/4 border border-solid rounded md:rounded-md overflow-hidden shadow">
      {children}
    </div>
  );
}
