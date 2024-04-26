import './App.css';
import { useState } from 'react';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== '') {
      setTodoList([...todoList, { text: todoInput, done: false }]); 
      setTodoInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].done = !newTodoList[index].done; 
    setTodoList(newTodoList);
  };

  const removeTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            onDoubleClick={() => removeTodo(index)} 
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }} 
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
