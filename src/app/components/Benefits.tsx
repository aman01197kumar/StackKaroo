import React from "react";
import Headline from "./Headline";
import styles from "../styles/benefits.module.scss";

function Benefits() {
  const benefitData = [
    "Top 5% Specialized Talent Pool",
    "Availability in various Time Zones",
    "Low Cost Advantage",
    "Low Cost Advantage",
    "Remote Onboarding and IT Support",
    "Remote Onboarding and IT Support",
    "Double the Retention Rate",
  ];
  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <Headline
        header="Benefits of Choosing Stackkaroo for Hiring Talents"
        subHeader="Benefits of Choosing Stackkaroo for Hiring Talents"
      />
      <div className="d-flex justify-content-between flex-wrap w-75">
        {benefitData?.map((item) => {
          return (
            <div
              className="p-3 rounded m-2"
              style={{
                backgroundImage: "linear-gradient(#D0DCF8,#fff, #D0DCF8)",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;
