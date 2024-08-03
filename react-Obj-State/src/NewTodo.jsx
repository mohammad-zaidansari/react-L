import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewTodo() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodos, setNewTodos] = useState("");

  let click = () => {
    setTodos([...todos, { task: newTodos, id: uuidv4() }]);
  };

  let updateInput = (event) => {
    setNewTodos(event.target.value);
  };

  let allUpperCase = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id)
        
    )

  }

  return (
    <>
      <h1>New Todo</h1>
      <input type="text" value={newTodos} onChange={updateInput}></input>
      <button onClick={click}>Add</button>
      <h3>Task List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={allUpperCase}>Update All to UpperCase</button>
    </>
  );
}
