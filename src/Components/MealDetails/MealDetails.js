import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const singleMeal = useLoaderData();
  const { idMeal, strArea, strMealThumb } = singleMeal.meals[0];
  return (
    <div>
      <h1>This is the MealDetails</h1>
      <p>Area: {strArea}</p>
      <img src={strMealThumb} alt="meal__thbnai"></img>
    </div>
  );
};

export default MealDetails;
