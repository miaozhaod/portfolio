import { Wrapper, SubHeading, Paragraph } from "app/components";
import {
  ProjectTitle,
  ProjectTime,
  ProjectCard,
  ProjectImage,
  ProjectDescription,
  ProjectTools,
  Tag,
} from "./components";
import WeatherImg from "app/assets/weather-app.png";

export default function WeatherApp() {
  return (
    <Wrapper>
      <ProjectTitle>
        <SubHeading>A personal Weather APP</SubHeading>
        <ProjectTime>2021 August</ProjectTime>
        {/* <Paragraph>A personal Weather APP</Paragraph> */}
        <a
          href="https://miaozhaod.github.io/weatherapp/"
          target="_blank"
          rel="noreferrer"
          className="text-green-500"
        >
          View the site
        </a>
      </ProjectTitle>
      <ProjectCard>
        <ProjectImage
          href="https://miaozhaod.github.io/weatherapp/"
          src={WeatherImg}
          alt="Weather APP"
        />
        <ProjectDescription>
          <Paragraph>
            My first React APP, aimed to fetch the weather data from
            OpenWeatherAPI and render the current and forecast weather by
            changing the states via React Hook for four cities I have ever lived
            in.
          </Paragraph>
          <ProjectTools href="https://miaozhaod.github.io/weatherapp/">
            <Tag>ReactJS</Tag>
            <Tag>TailwindCSS</Tag>
            <Tag>OpenWeather API</Tag>
          </ProjectTools>
        </ProjectDescription>
      </ProjectCard>
    </Wrapper>
  );
}
