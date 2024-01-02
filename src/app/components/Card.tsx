import React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "../styles/card.module.scss";

interface characterStickProp {
  img_src: string;
  content: String;
  title: String;
}

const StackCard: React.FC<characterStickProp> = ({
  img_src,
  content,
  title,
}) => {
  return (
    <Card
      variant="outlined"
      className={`d-flex flex-column align-items-center p-4 mb-5 shadow-sm rounded ${styles.cards__wrapper}`}
    >
      <Image src={img_src} alt="abc" className="mb-3 mt-2" />
      <div className="text-primary fs-6 fw-bold pt-2 pb-2">{title}</div>
      <div className="text-center">{content}</div>
    </Card>
  );
};

export default StackCard;
