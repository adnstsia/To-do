import React, { useState } from "react";

const CreateTodoField = ({ setDotoshki }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setDotoshki((prev) => [
      {
        _id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 border-spacing-1 px-5 py-3 mt-20  h-10 w-full">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};

export default CreateTodoField;
