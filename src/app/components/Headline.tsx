import React from "react";

interface HeadlineProps {
  header: string;
  subHeader: string;
}

function Headline(props: HeadlineProps) {
  const { header, subHeader } = props;

  return (
    <>
      <div className="fw-bold fs-4 text-warning">{header}</div>
      <div className="text-secondary pt-2 fst-normal fs-5">{subHeader}</div>
    </>
  );
}

export default Headline;
