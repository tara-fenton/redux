const initialState = [
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
];

const ingredientsReducer = (ingredients = initialState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
			const newIngredient = {
				name: action.name,
				recipe: action.recipe,
				quanity: action.quanity
			}
      return ingredients.concat(newIngredient);
  }

  return ingredients;
};

export default ingredientsReducer;
