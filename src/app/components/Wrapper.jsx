import React from "react";

export default function Wrapper({ children, align, gap, id }) {
  return (
    <section
      className={`flex flex-col md:flex-row md:justify-between ${align} w-full max-w-screen-xl ${gap} md:gap-20 py-12`}
      id={id}
    >
      {children}
    </section>
  );
}
