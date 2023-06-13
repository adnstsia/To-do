import React from "react";
import Check from "./item/Check";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";

const DotoshkiItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 h-10 w-full"
      onClick={() => changeTodo(todo._id)}
    >
      <button className="flex items-center">
        <Check isCompleted={todo.isCompleted} />
        <span
          className={cn({
            "line-through": todo.isCompleted,
          })}
        >
          {todo.title}
        </span>
      </button>

      <button onClick={() => removeTodo(todo._id)}>
        <BsTrash
          size={22}
          className="text-gray-400  mr-3 hover:text-red-800 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default DotoshkiItem;
