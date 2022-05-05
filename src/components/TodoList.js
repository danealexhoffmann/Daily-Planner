import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="List-container">
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
