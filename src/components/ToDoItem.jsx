import React from 'react';

const ToDoItem = ({ item, toggleComplete, deleteToDo }) => {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
        />
        <span
          style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
        >
          {item.text}
        </span>
      </div>
      <button onClick={() => deleteToDo(item.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
