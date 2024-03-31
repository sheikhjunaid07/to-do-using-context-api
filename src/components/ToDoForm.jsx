import { useState } from "react";
import useToDo from "../contexts/ToDoContext";

function TodoForm() {
  const [todo, setTodo] = useState(""); //this state for an individual todo

  const { addTodo } = useToDo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false }); //in this line (todo: todo) both field and value are same so we write only one time and we don't use id here because we already declared inside addToDo() in App component
    setTodo(""); //we set input field empty after adding todo
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
