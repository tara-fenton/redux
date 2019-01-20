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

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return Object.assign({}, state, {
        recipes: state.recipes.concat({ name: action.name })
      });
    case "ADD_INGREDIENT":
			const newIngredient = {
				name: action.name,
				recipe: action.recipe,
				quanity: action.quanity
			}
      return Object.assign({}, state, {
        ingredients: state.ingredients.concat(newIngredient)
      });
  }

  return state;
};

const store = createStore(reducer, initialState);

window.store = store;
