import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Recipe Search</h3>
      <ul className="Nav-Links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/recipes">
          <li>Recipes</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
