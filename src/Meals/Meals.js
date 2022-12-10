import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals.js";
import MealsSummary from "./MealsSummary.js";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
