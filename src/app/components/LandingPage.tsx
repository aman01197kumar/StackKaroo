import React from "react";
import people from "../../assets/images/people.png";
import Image from "next/image";
import Button from "@mui/material/Button";

function LandingPage() {
  return (
    <div style={{ backgroundImage: "linear-gradient(#D0DCF8,#fff, #D0DCF8)" }}>
      <div className="d-flex justify-content-center flex-column align-items-center pt-2">
        <Image src={people} alt="People" className=" img-fluid" />
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="text-primary  pt-2 fw-bold fs-3">
            Experience Seamless Hiring
          </div>
          <div className="text-secondary pt-2 fst-normal fs-5 text-center">
            “Connecting Global Companies with the Best Indian Talent”
          </div>
          <div className="pt-2 w-75 text-center">
            STACKKAROO is a hiring platform that picks the best of IT & Non-IT
            fields as well as web development, digital marketing, data science,
            business development, human resource, content writing, advertising
            and much more in India. Their communication skills, fit for culture,
            and ability to be ethical for global work will be assessed.
          </div>
        </div>
        <Button variant="contained" className="bg-warning rounded m-5">
          Job Opening
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
