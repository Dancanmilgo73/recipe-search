import React from "react";
import { useState } from "react";
import style from "./Recipe.module.css";
import Modal from "./Modal";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="#" />
      <h4>{title}</h4>
      <div className={style.buttons}>
        <button className="Details" onClick={() => setIsOpen(true)}>
          Details
        </button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title={title}
          url={url}
        >
          {calories.toFixed(2)}
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.image}>{ingredient.text}</li>
            ))}
          </ul>
        </Modal>
        <button className="Details">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Recipe URL
          </a>
        </button>
      </div>
      {/* <p>{calories.toFixed(2)}</p> */}
      {/* <img className={style.image} src={image} alt="#" />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredients.image}>{ingredient.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Recipe;
