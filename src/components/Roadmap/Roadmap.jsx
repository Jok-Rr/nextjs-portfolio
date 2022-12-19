import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./listExp";
import { RoadmapCard } from "./RoadmapCard";

export const Roadmap = () => {
  return (
    <div className="bg-lightdark">
      <Container>
        <Heading2>Mon parcours 🕰</Heading2>
        <VerticalTimeline
          className="col-span-4"
          layout="2-columns"
          animate={false}
        >
          {data.map((data, index) => {
            return (
              <RoadmapCard
                key={index}
                title={data.title}
                subtitle={data.subtitle}
                content={data.content}
                date={data.date}
                type={data.type}
              />
            );
          })}
        </VerticalTimeline>
      </Container>
    </div>
  );
};
