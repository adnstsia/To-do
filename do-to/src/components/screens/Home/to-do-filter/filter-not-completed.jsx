import React, { useState, useEffect } from "react";

// Фильтр тасков в состоянии Uncompleted
const FilterTodoNotCompleted = ({ setDotoshki, data }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (showCompleted) {
      const incompleteTasks = data.filter((todo) => !todo.isCompleted);
      setFilteredTasks(incompleteTasks);
    } else {
      setFilteredTasks(data);
    }
  }, [showCompleted, data]);

  const handleToggle = () => {
    setShowCompleted(!showCompleted);
  };

  useEffect(() => {
    setDotoshki(filteredTasks);
  }, [filteredTasks, setDotoshki]);

  return (
    <div
      className="flex items-center justify-center my-4"
      onClick={handleToggle}
    >
      Uncompleted
    </div>
  );
};

export default FilterTodoNotCompleted;
