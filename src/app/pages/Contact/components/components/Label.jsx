import React from "react";

export default function Label({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm tracking-wide uppercase text-gray-600"
    >
      {children}
    </label>
  );
}
