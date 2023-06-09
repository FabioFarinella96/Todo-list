import "./index.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCheck2All } from "react-icons/bs";
import { useState } from "react";

const ToDoContainer = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const [remove, setRemove] = useState(false);

  const removeToDoFromLocalStorage = () => {
    const savedTodo = JSON.parse(localStorage.getItem("todo"));
    const updatedTodo = savedTodo.filter((item) => item !== todo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };

  const handleRemoveToDo = () => {
    setRemove((prev) => !prev);
    removeToDoFromLocalStorage();
  };

  return (
    <div className={`ToDoContainer ${remove && "hidden-container"}`}>
      <p className="todo-text">{todo}</p>

      <div className="down-section">
        <button
          className={`check-button ${checked && "checked"}`}
          onClick={() => setChecked((prev) => !prev)}
        >
          {checked ? (
            <p>
              Completed <BsCheck2All className="icon" />
            </p>
          ) : (
            <p>Complete</p>
          )}
        </button>
      </div>
      <button className="remove-button" onClick={handleRemoveToDo}>
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
};

export default ToDoContainer;
