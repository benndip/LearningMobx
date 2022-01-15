import { makeObservable, observable, action, computed } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      numberOfTodos: computed
    });
  }

  addTodo = (title) => {
    const item = {
      id: Math.random(),
      title,
      completed: false
    };
    this.todos.push(item);
  };

  get numberOfTodos() {
    return this.todos.length;
  }
}

const store = new TodoStore();
export default store;
