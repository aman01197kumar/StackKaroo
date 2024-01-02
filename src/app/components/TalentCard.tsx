import React from "react";
import styles from "../styles/talentCard.module.scss";

interface talentProps {
  id: number;
  title: String;
  content: String;
}

function TalentCard(props: talentProps) {
  const { id, title, content } = props;
  return (
    <div
      className={`d-flex flex-column align-items-center m-2 w-75 ${styles.talent__wrapper}`}
    >
      <div
        className={`rounded-circle fw-bold shadow-sm fs-3 bg-white ${styles.talent__id}`}
      >
        {id}
      </div>
      <div className="rounded p-3 shadow-sm text-center h-100 bg-white">
        <div className="mt-5">
          <div className="text-primary fw-bold pb-2">{title}</div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default TalentCard;
