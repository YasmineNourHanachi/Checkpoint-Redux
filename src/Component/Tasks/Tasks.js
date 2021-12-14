import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../Redux/Actions/Actions";
import EditTask from "../Modals/EditTask";
import { Button } from "react-bootstrap";
import "./Tasks.css";

const Tasks = ({ e }) => {
  const dispatch = useDispatch();
  const deleteT = () => {
    dispatch(deleteTask(e.id));
  };
  const done = () => {
    dispatch(doneTask(e.id));
  };
  return (
    <div>
      <ul id="myUL">
        <li className="line">
          <div className="check">
            <input
              onClick={done}
              type="checkbox"
              name="packersOff"
              id="packers"
              value="1"
            />
            <label for="packers" className="strikethrough">
              {e.text}
            </label>
          </div>
          <div className="btns">
            <EditTask e={e} />
            <Button onClick={deleteT} className="btn" variant="danger">
              Delete
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tasks;
