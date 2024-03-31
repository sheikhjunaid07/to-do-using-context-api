import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // if we directly use setTodos(prev) so setTodos function always overwrite the todo and we see only the last one,
    //that's why we use arrow function inside setTodos function now they just simply add the todos one by one to existing array
    //todo is also an object and its on properties so we cannot use todo directly that's why we use object inside setTodos function
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    //filter traverse todos one by one and we check id's whose id is matched with given id filter() simply deleted
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo  //we overwrite the completed value
      )  //We have used spread operator because we are changing only one value and the rest of the values will remain the same. 
    );
  };

  //1) Local Storage (this useEffect is used for show the data on the screen)
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")); //when you want to get data you only need the keys.
    if (todos && todos.length > 0) {
      //we check if storage is empty than add the value
      setTodos(todos);
    }
  }, []);

  //2) local Storage( this useEffect is used for add todo in todos) if we use only one useEffect (1) so we get same value every time
  useEffect(() => {
    //when you want to set data you need keys and values.
    localStorage.setItem("todos", JSON.stringify(todos)); //we use stringify()  to convert JSON to string
  }, [todos]);

  return (
    <ToDoProvider
      value={(todos, addTodo, updateTodo, deleteTodo, toggleCompleted)}
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
