import { createStore } from 'redux';
import rootReducer from './reducers/root';

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

const store = createStore(rootReducer, initialState);

window.store = store;

export default store;
