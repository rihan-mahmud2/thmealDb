import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import "./Food.css";

const Cusines = () => {
  const foods = useLoaderData().meals;

  return (
    <div>
      <h1>All Canadian Foods {foods.length}</h1>
      <div className="food">
        {foods.map((food) => (
          <Food food={food} key={food.idMeal}></Food>
        ))}
      </div>
    </div>
  );
};

export default Cusines;
