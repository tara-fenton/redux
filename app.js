import { createStore } from "redux";

const initialState = {
  recipes: [
    {
      id: 10,
      name: "Omelette"
    }
  ],
  ingredients: [
    {
      recipe_id: 10,
      name: "Egg",
      quanity: 2
    },
    {
      recipe_id: 10,
      name: "Milk",
      quanity: 1
    }
  ]
};

const reducer = (state, action) => state;
const store = createStore(reducer, initialState);

window.store = store;
