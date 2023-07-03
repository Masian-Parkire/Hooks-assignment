import React from 'react';
import'./style.css';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/details">Details</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;