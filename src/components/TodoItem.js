import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li className="">
      <span className="">
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={handleCompleteClick}
        ></input>
        {title}
      </span>
      <button className="delete-button" onClick={handleDeleteClick}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
