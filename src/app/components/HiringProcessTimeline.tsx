import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { hiringProcessData } from "@/assets/data/hiringProcessData";

function HiringProcessTimeline() {
  return (
    <VerticalTimeline>
      {hiringProcessData?.map((item, i) => (
        <VerticalTimelineElement
          key={i} // Ensure to provide a unique key for each element
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={item.img_src}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.content}</h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default HiringProcessTimeline;
