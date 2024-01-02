import React from "react";
import HiringProcessTimeline from "./HiringProcessTimeline";
import Headline from "./Headline";

function HiringProcess() {
  return (
    <div>
      <div className="mt-5 d-flex align-items-center flex-column">
        <Headline
          header="Our Rigorous Hiring Process"
          subHeader="To make sure, our Talent get the Best Opportunities"
        />
        <HiringProcessTimeline />
      </div>
    </div>
  );
}

export default HiringProcess;
