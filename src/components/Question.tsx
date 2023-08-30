import React from "react";
interface Props {
  iconRight?: boolean;
  icon: React.ReactNode;
  question: any;
}
const Question: React.FC<Props> = ({ iconRight = true, question, icon }) => {
  return (
    <div
      className={`w-100 d-flex ${
        iconRight
          ? "flex-row justify-content-between"
          : "flex-row-reverse justify-content-end"
      } align-items-center   py-4 px-2 rounded-2 shadow-lg  question my-2`}
    >
      {question}
      {icon}
    </div>
  );
};

export default Question;
