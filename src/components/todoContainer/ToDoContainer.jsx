import "./index.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCheck2All } from "react-icons/bs";
import { useState } from "react";

const ToDoContainer = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const [remove, setRemove] = useState(false);

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
      <button
        className="remove-button"
        onClick={() => setRemove((prev) => !prev)}
      >
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
};

export default ToDoContainer;
