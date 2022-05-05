import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  const allTodos = useSelector((state) => state.todos.length);

  console.log(allTodos);

  return (
    <h4 className="completed-text">
      Tasks Completed: {completedTodos.length} of {allTodos}
    </h4>
  );
};

export default TotalCompleteItems;
