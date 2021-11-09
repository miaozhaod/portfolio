import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center py-6 font-extralight border-t text-gray-600">
      <div className="flex flex-col items-center w-screen max-w-screen-xl px-6 xl:px-0 uppercase">
        <span>© Miao Z | {date} </span>
      </div>
    </footer>
  );
}
