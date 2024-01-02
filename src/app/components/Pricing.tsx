import React from "react";
import Headline from "./Headline";
import { pricingData } from "@/assets/data/pricingdata";
import StackCard from "./Card";

function Pricing() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Headline
        header="Pricing"
        subHeader="Best Services at the Most Affordable Cost"
      />
      <div className="d-flex justify-content-between flex-wrap w-75 mt-5">
        {pricingData?.map((item, i) => {
          return (
            <>
              <StackCard
                key={i}
                img_src={item.img_src}
                content={item.content}
                title={item.title}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
