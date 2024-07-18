import React, { useState } from 'react';

const AddToDo = ({ addToDo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addToDo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new to-do task.."
      />
      <button id="add" type="submit">Add</button>
    </form>
  );
};

export default AddToDo;
