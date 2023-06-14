import React, { useState } from "react";

// Фильтр тасков в состоянии Completed
const FilterTodoCompleted = ({ setDotoshki, data }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  const handleToggle = () => {
    setDotoshki(data);
    setShowCompleted(!showCompleted);

    if (!showCompleted) {
      const completedTasks = data.filter((todo) => todo.isCompleted);
      setAllTasks(completedTasks);
      setDotoshki(completedTasks);
    }
  };

  return (
    <div
      className="flex items-center justify-center my-4"
      onClick={handleToggle}
    >
      Completed
    </div>
  );
};

export default FilterTodoCompleted;
