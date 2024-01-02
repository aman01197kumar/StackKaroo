import React from "react";
import Headline from "./Headline";
import { featureData } from "@/assets/data/featureData";
import FeatureList from "./FeatureList";

function Features() {
  return (
    <div className="d-flex align-items-center flex-column mt-5">
      <Headline
        header="Talents from Stackkaroo sets the Benchmark"
        subHeader="We choose the Best for your Company"
      />
      <div className="d-flex justify-content-center w-75 mt-4">
        <div
          className="d-flex flex-wrap justify-content-between p-3 rounded"
          style={{
            width: "95%",
            backgroundImage: "linear-gradient(180deg,#fff, #d5e0f8)",
          }}
        >
          {featureData?.map((item, index) => {
            return (
              <FeatureList
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
