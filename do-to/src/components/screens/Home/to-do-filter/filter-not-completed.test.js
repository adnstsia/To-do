import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterTodoNotCompleted from "./filter-not-completed";

// Тест для не выполненных тасков
test("should toggle showCompleted state and update data", () => {
  const setDotoshkiMock = jest.fn();
  const dataMock = [
    { _id: "1", title: "Task 1", isCompleted: false },
    { _id: "2", title: "Task 2", isCompleted: true },
    { _id: "3", title: "Task 3", isCompleted: false },
  ];

  const { getByText } = render(
    <FilterTodoNotCompleted setDotoshki={setDotoshkiMock} data={dataMock} />
  );

  const component = getByText("Uncompleted");

  expect(component).toBeInTheDocument();

  fireEvent.click(component);

  expect(setDotoshkiMock).toHaveBeenCalledWith(
    dataMock.filter((todo) => !todo.isCompleted)
  );
});