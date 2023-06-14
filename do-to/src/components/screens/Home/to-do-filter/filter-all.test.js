import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterTodoAll from "./filter-all";

// Тест для не выполненных тасков
test("FilterTodoAll component triggers setDotoshki with data on click", () => {
  const setDotoshki = jest.fn();

  const data = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
  ];

  const { getByText } = render(
    <FilterTodoAll setDotoshki={setDotoshki} data={data} />
  );

  fireEvent.click(getByText("All"));

  expect(setDotoshki).toHaveBeenCalledWith(data);
});
