import { useContext } from "react";
import { createContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todomsg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export default function useToDo() {
  return useContext(ToDoContext);
}
