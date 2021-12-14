import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Actions/Actions";
import { Button } from "react-bootstrap";
import "./AddTasks.css";

const AddTask = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTask({ id: Math.random(), isDone: false, text: text }));
    setText("");
  };
  return (
    <div className="Input-Container">
      <div className="add-element">
        <h1>ToDo List</h1>
        <input
          type="text"
          id="myInput"
          placeholder=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="add-Btn" onClick={add} variant="dark">
          New Task
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
