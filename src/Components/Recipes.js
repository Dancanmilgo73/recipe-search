import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const appId = process.env.REACT_APP_APP_ID;
  const appKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

  const getRecipes = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.hits);
  };
  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="recipes">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
