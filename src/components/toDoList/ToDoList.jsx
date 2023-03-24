import "./index.css";
import { RiTodoLine } from "react-icons/ri";
import ToDoContainer from "../../components/todoContainer";
import { useState, useEffect } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      setTodo(JSON.parse(savedTodo));
    }
  }, []);

  const saveToLocalStorage = (todo) => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setTodo((prev) => {
      if (
        !prev.find((item) => item.toLowerCase() === inputValue.toLowerCase())
      ) {
        const updatedTodo = [...todo, inputValue];
        saveToLocalStorage(updatedTodo);
        return updatedTodo;
      } else {
        alert("Hai già aggiunto questo valore alla lista!");
        return prev;
      }
    });

    setInputValue("");
  };

  return (
    <div className="ToDoList">
      <h2 className="todo-title">
        Todo List <RiTodoLine className="title-icon" />
      </h2>
      <form onSubmit={onHandleSubmit} className="todo-form">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="todo-input"
          placeholder="What to do today?"
          required
        />

        <input type="submit" className="todo-button" value="Add" />
      </form>
      {todo.sort().map((element) => (
        <ToDoContainer todo={element} key={element} />
      ))}
    </div>
  );
};

export default ToDoList;
