import React from "react";
import { useSelector } from "react-redux";
import Tasks from "../Tasks/Tasks";
import "./TodoList.css";

const TodoList = () => {
  const list = useSelector((state) => state.tasks);

  return (
    <div className="list">
      {list.map((e) => (
        <Tasks key={e.id} e={e} />
      ))}
    </div>
  );
};

export default TodoList;
