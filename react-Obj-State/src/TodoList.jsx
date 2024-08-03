import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]); // store todo list
  let [newTodo, setNewTodo] = useState(""); // For get input value

  let click = () => {
    if (newTodo != "") {
      // setTodos([...todos, {task: newTodo, id: uuidv4()}]);
      setTodos((prevTodos) => {
        // as a callback
        return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
      });
    } else {
      alert("Enter a task you sent empty task");
    }
    setNewTodo("");
  };

  let changeList = (event) => {
    // In react input field dynimacally works.
    setNewTodo(event.target.value);
  };

  //Delete task
  let deletTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id != id))
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };

  //Update One task to UpperCase
  let UpdateTodo = (id) => {
    setTodos((prevTodo) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  //Update all in UpperCase
  let toUpperCase = () => {
    setTodos((pervTodo) =>
      pervTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  //Update all in LowerCase
  let toLowerCase = () => {
    setTodos((prevTodo2) =>
      prevTodo2.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  //Done all in Tasks
  let doneAllTodo = () => {
    setTodos((prevTodo2) =>
      prevTodo2.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  //Done One task
  let doneTodo = (id) => {
    setTodos((prevTodo) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <h3>Task Todo</h3>
      <hr />
      <input
        placeholder="Enter your task"
        value={newTodo} // Update with current state
        onChange={changeList} // Link input change to state update
      />
      <br />
      <button onClick={click}>Add Task</button>
      <br />
      <br />
      <br />
      <p>Todo List</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            <button onClick={() => deletTodo(todo.id)}>delete</button>
            <button onClick={() => UpdateTodo(todo.id)}>Update</button>
            <button onClick={() => doneTodo(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={toUpperCase}>Convert All to UpperCase</button>
      <br />
      <button onClick={toLowerCase}>Convert All to LowerCase</button>
      <br />
      <button onClick={doneAllTodo}>Mark All done</button>
    </>
  );
}
