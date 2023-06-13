import React from "react";
import { BsCheck } from "react-icons/bs";
import cn from "classnames";

const Check = ({ isCompleted }) => {
  return (
    <div
      className={cn(
        `border-2 rounded-lg
        border-lime-300  w-7 h-7 mr-3 ml-2 flex items-center justify-center`,
        {
          "bg-lime-300": isCompleted,
        }
      )}
    >
      {isCompleted && <BsCheck size={24} className="text-neutral-500" />}
    </div>
  );
};

export default Check;
