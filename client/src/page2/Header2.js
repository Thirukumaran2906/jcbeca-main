import React from 'react';
import CSS from './page2.module.css'

const Header2 = () => {
  return (
    <div className={CSS.header}>
      <ul>
        <li><a href="#desk">Editor desk</a></li>
        <li><a href="#members">Editors</a></li>
        <li><a href="#joinbox">Join</a></li>
      </ul>
    </div>
  );
}

export default Header2;
