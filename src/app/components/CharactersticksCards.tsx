import React from "react";
import { characterSticksData } from "@/assets/data/characterSticksData";
import StackCard from "./Card";
import Headline from "./Headline";
import styles from '../styles/global.module.scss'

function Charactersticks() {
  return (
      <div className="d-flex flex-column align-items-center mt-5">
        <Headline
          header="We are Best Because"
          subHeader="Affordable Web Development Company in India"
        />
        <div className={`d-flex justify-content-between flex-wrap w-75 mt-5 ${styles.flex__container}`}>
          {characterSticksData?.map((item, i) => {
            return (
              <>
                <StackCard
                key={i}
                  imgsrc={item.img_src}
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

export default Charactersticks;
