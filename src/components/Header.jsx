import React from 'react';
import { RiTodoLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
        <h1>To-Do List <RiTodoLine size={28} className='icon'/></h1>
    </header>
  );
};

export default Header;
