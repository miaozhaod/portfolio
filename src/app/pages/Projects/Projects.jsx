import React from "react";
import {
  WeatherApp,
  PortfolioApp,
  GreatPhermesia,
  CraftExample,
} from "./components";
import { Container, ScrollToTopButton } from "app/components";

export default function Projects() {
  const projects = [
    <WeatherApp />,
    <GreatPhermesia />,
    <PortfolioApp />,
    <CraftExample />,
  ];

  return (
    <Container>
      <div className="w-full grid grid-cols-1 divide-y">
        {projects.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <ScrollToTopButton />
    </Container>
  );
}
