import { useState } from "react";
import "./App.css";
import { ToDoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // if we directly use setTodos(prev) so setTodos function always overwrite the todo and we see only the last one,
    //that's why we use arrow function inside setTodos function now they just simply add the todos one by one to existing array
    //todo is also an object and its on properties so we cannot use todo directly that's why we use object inside setTodos function
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  };

  const updateTodo = (id, todo) => {};

  const deleteTodo = (id) => {};

  const toggleComplete = (id) => {};
  return (
    <ToDoProvider
      value={(todos, addTodo, updateTodo, deleteTodo, toggleComplete)}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
