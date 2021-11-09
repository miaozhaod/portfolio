import React from "react";

export default function ProjectImage({ href, src, alt }) {
  return (
    <div className="overflow-hidden">
      <a href={href} rel="noreferrer" target="_blank">
        <img
          src={src}
          alt={alt}
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
      </a>
    </div>
  );
}
