import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const RoadmapCard = ({ title, subtitle, content, date, icon, type }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#121212", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #121212" }}
      date={date}
      iconStyle={{
        background: "#3342E8",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        type === "work" ? (
          <i className="fa-solid fa-suitcase"></i>
        ) : (
          <i className="fa-solid fa-graduation-cap"></i>
        )
      }
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{content}</p>
    </VerticalTimelineElement>
  );
};
