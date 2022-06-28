import React from "react";
import {
  WeatherApp,
  PortfolioApp,
  GreatPhermesia,
  InspireLiteracy,
  UxLg,
  AComosus,
} from "./components";
import { Container, ScrollToTopButton } from "app/components";

export default function Projects() {
  const projects = [
    <AComosus />,
    <GreatPhermesia />,
    <WeatherApp />,
    <PortfolioApp />,
    <InspireLiteracy />,
    <UxLg />,
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
