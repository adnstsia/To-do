import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterTodoCompleted from "./filter-completed";

// Тест для не выполненных тасков
test("FilterTodoCompleted component triggers setDotoshki with completed tasks on click", () => {
  const setDotoshki = jest.fn();

  const data = [
    { id: 1, title: "Task 1", isCompleted: true },
    { id: 2, title: "Task 2", isCompleted: false },
    { id: 3, title: "Task 3", isCompleted: true },
  ];

  const { getByText } = render(
    <FilterTodoCompleted setDotoshki={setDotoshki} data={data} />
  );

  fireEvent.click(getByText("Completed"));

  const completedTasks = data.filter((todo) => todo.isCompleted);
  expect(setDotoshki).toHaveBeenCalledWith(completedTasks);
});
