import React from 'react';
import Button from "./button.js"
function Header() {
  return (
    <nav>
      <p>Logo</p>
      <ul>
        <li><a href = "#Cats">Cats</a></li>
        <li><a href = "#Events">Events</a></li>
        <li><a href = "#About">About</a></li>
        <Button name="Donate"/>
      </ul>
    </nav>
  );
}

export default Header;