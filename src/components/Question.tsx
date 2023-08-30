import React from "react";
import { BiSolidUser } from "react-icons/bi";
interface Props {
  iconRight?: boolean;
  question: any;
}
const Question: React.FC<Props> = ({ iconRight = true, question }) => {
  return (
    <div
      className={`w-100 d-flex ${
        iconRight
          ? "flex-row justify-content-between"
          : "flex-row-reverse justify-content-end"
      } align-items-center   py-4 px-2 rounded-2 shadow-lg  question my-2`}
    >
      {question}
      <BiSolidUser className="text-warning" size={30} />
    </div>
  );
};

export default Question;
