import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  return (
    <div className="container">
      <div className="task-container">
        <form onSubmit={onSubmit} className="form-inline mt-5 mb-3">
          <input
            type="text"
            className="task-name"
            placeholder="  Add task..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>

          <button type="submit" className="task-submit">
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoForm;
