import React from "react";
import { Banner, Profession, Personality, Pasttime } from "./components";
import { Container, ScrollToTopButton } from "app/components";

export default function Home() {
  const descriptions = [<Profession />, <Pasttime />, <Personality />];

  return (
    <Container>
      <Banner />
      <div className="w-full grid grid-cols-1 divide-y">
        {descriptions.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <ScrollToTopButton />
    </Container>
  );
}
