import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="home-content">
        <h3 className="h3">Cool Recipes</h3>
        <Link to="/recipes">
          <button>Search Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
