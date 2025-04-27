// src/components/TodoList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 To-do List</h2>
      <input
        type="text"
        value={input}
        placeholder="Nhập công việc..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: 10 }}>
        Thêm
      </button>

      <ul style={{ marginTop: 20 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 10 }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ marginLeft: 10 }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
