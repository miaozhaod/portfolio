import React from "react";

export default function Container({ children }) {
  return (
    <main className="flex flex-col justify-between w-screen max-w-screen-xl px-6 xl:px-0 relative">
      {children}
    </main>
  );
}
