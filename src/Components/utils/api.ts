import { TNewRecipe, TRecipe } from "./types";

const API_BASE_URL = 'https://dummyjson.com/recipes';

export const getAllRecipesApi = async (): Promise<TRecipe[]> => {
  try {
    const response = await fetch(API_BASE_URL);
    if (response.ok) {
      const data = await response.json();
      return data.recipes as TRecipe[];
    } else console.error('Error fetching recipes', response.status, response.statusText);
  }
  catch (error) {
    console.error('Network error', error);
  }
  return [];
}

export const addRecipeApi = async (newRecipe: TNewRecipe): Promise<TRecipe> => {
  try {
    const response = await fetch(`${API_BASE_URL}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe)
    })
    if (response.ok) {
      const data = await response.json();
      return data as TRecipe;
    } else throw new Error(`${response.status, response.statusText}`);
    
  }
  catch (error) {
    console.error('Network error', error);
     return Promise.reject(error);
  }
}