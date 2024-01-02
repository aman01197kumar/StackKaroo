import React from "react";
import Headline from "./Headline";
import { talentData } from "@/assets/data/talentData";
import TalentCard from "./TalentCard";

function TalentIntroduction() {
  return (
    <>
      <div className="mt-5 d-flex align-items-center flex-column">
        <Headline
          header="Hire Best Talents from Stackkaroo"
          subHeader="4 Easy Steps for Simple and Fast Hiring"
        />
      </div>
      <div className="d-flex justify-content-center mt-5">

      <div className="d-flex justify-content-between w-75 mt-5">
        {talentData?.map((item) => {
          return (
            <TalentCard
              id={item.id}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
      </div>
    </>
  );
}

export default TalentIntroduction;
