import React from "react";

// Фильтр тасков ALl
const FilterTodoAll = ({ setDotoshki, data }) => {
  const handleToggle = () => {
    setDotoshki(data);
  };

  return (
    <div
      className="flex items-center justify-center my-4"
      onClick={handleToggle}
    >
      All
    </div>
  );
};

export default FilterTodoAll;
