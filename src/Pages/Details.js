import React from "react";
import "../CSS/Details.css";
import NutriCard from "../Components/NutriCard";
const Details = () => {
  return (
    <div className="Details">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active">
            <a href="#">Recipes</a>
          </li>
        </ol>
      </nav>
      <div className="RecipeDetails">
        <img src="pasta.jpg"></img>
        <h1>Italian Pasta</h1>
        <h2>Nutritions</h2>
        <div className="nutrition">
          <NutriCard
            value="250"
            unit="Kcal"
            name="Calories"
            bg="linear-gradient(to right, #f85032, #e73827)"
          />
          <NutriCard
            value="250"
            unit="gram"
            name="Carbo"
            bg="linear-gradient(to right, #56ab2f, #a8e063)"
          />
          <NutriCard
            value="35"
            unit="gram"
            name="Protein"
            bg="linear-gradient(to right, #6190e8, #a7bfe8)"
          />
          <NutriCard
            value="135"
            unit="gram"
            name="Calcium"
            bg="linear-gradient(to bottom, #00d2ff, #928dab)"
          />
        </div>
        <h2>Ingredients</h2>
        <ul>
          <li>Pasta 1 Packet</li>
          <li>Brocolli x3</li>
          <li>Cheese 30gm</li>
          <li>Tomato x4</li>
          <li>Basil x3</li>
        </ul>
        <h2>Recipe</h2>
        <p className="recipe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Tutorial</h2>
        <iframe></iframe>
        <h1>Video here</h1>
      </div>
    </div>
  );
};

export default Details;
