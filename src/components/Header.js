import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Daily Planner</h1>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/stats">Statistics</Link>
    </nav>
  </header>
);

export default Header;
