import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoItems, toggleComplete, deleteToDo, filter }) => {
  const filteredItems = toDoItems.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'complete') return item.completed;
    if (filter === 'incomplete') return !item.completed;
    return true;
  });

  return (
    <ul>
      {filteredItems.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
