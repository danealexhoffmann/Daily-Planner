import React from "react";
import Greeting from "./components/Greeting";
import Today from "./components/Date";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = () => {
  return (
    <div className="">
      <Greeting />
      <Today />
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
