const rootReducer = (state, action) => {
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

export default rootReducer;
