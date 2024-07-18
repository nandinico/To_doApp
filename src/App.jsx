import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

const App = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [filter, setFilter] = useState('all');

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setToDoItems([...toDoItems, newToDo]);
  };

  const toggleComplete = (id) => {
    setToDoItems(
      toDoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteToDo = (id) => {
    setToDoItems(toDoItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header />
      <AddToDo addToDo={addToDo} />
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('complete')}>Complete</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ToDoList
        toDoItems={toDoItems}
        toggleComplete={toggleComplete}
        deleteToDo={deleteToDo}
        filter={filter}
      />
    </div>
  );
};

export default App;
