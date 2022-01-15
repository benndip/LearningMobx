import { observer } from "mobx-react";
import React from "react";

const App = ({ todoStore }) => {
  const [todo, setTodo] = React.useState("");

  const addTodo = () => {
    todoStore.addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <h1>You have {todoStore.numberOfTodos} Todo(s)</h1>
      <input
        value={todo}
        placeholder="Enter your todo"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
      <div>
        {todoStore.todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </div>
    </div>
  );
};

export default observer(App);
