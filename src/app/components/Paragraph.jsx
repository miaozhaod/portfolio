import React from "react";

export default function Paragraph({ children }) {
  return (
    <p className="font-extralight tracking-wide leading-7 text-gray-600">
      {children}
    </p>
  );
}
