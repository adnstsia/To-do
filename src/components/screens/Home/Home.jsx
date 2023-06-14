import React, { useState } from "react";
import DotoshkiItem from "./DotoshkiItem";
import CreateTodoField from "./create-todo-field/create-todo-field";
import FilterTodoNotCompleted from "./to-do-filter/filter-not-completed";
import FilterTodoCompleted from "./to-do-filter/filter-completed";
import FilterTodoAll from "./to-do-filter/filter-all";

// Основной файл

// Изначальный массив
const data = [
  { _id: "jbhvtrhjb", title: "Я твой сахарный пакет", isCompleted: false },
  {
    _id: "jbhkDhrhjb",
    title: "Обязательно отправиться туда",
    isCompleted: false,
  },
  {
    _id: "JBhxhdjb",
    title: "Не забыть принести то",
    isCompleted: false,
  },
  {
    _id: "jbhkDhlemknb",
    title: "Почитинь сё",
    isCompleted: false,
  },
  {
    _id: "pcprnrb",
    title: "Посчитать барашков",
    isCompleted: false,
  },
];
const Home = () => {
  const [dotoshki, setDotoshki] = useState(data);

  const changeTodo = (id) => {
    const copy = [...dotoshki];
    const current = copy.find((todo) => todo._id === id);
    current.isCompleted = !current.isCompleted;
    setDotoshki(copy);
  };

  const removeTodo = (id) =>
    setDotoshki([...dotoshki].filter((todo) => todo._id !== id));

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold  text-center mb-4">Dotoshki To-Do</h1>
      {dotoshki.map((todo) => (
        <DotoshkiItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}

      {/* Поле ввода тасков */}
      <CreateTodoField setDotoshki={setDotoshki} />
      {/* Контейнер с кнопками-переключателями между состояниями заявок */}
      <div className="flex justify-center w-full gap-2">
        {/* Переключатель "Uncompleted" */}
        <button className="hover:text-lime-200 transition-colors ease-in-out duration-300">
          <FilterTodoNotCompleted setDotoshki={setDotoshki} data={data} />
        </button>
        {/* Переключатель "All" */}
        <button className="hover:text-lime-200 transition-colors ease-in-out duration-300">
          <FilterTodoAll setDotoshki={setDotoshki} data={data} />
        </button>
        {/* Переключатель "Completed" */}
        <button className="hover:text-lime-200 transition-colors ease-in-out duration-300">
          <FilterTodoCompleted setDotoshki={setDotoshki} data={data} />
        </button>
      </div>
    </div>
  );
};

export default Home;
