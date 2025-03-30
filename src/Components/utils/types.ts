export type TRecipe = {
  id: number,
  name: string,
  ingredients: string[],
  instructions: string[],
  prepTimeMinutes: number;
  cookTimeMinutes: number,
  servings: number,
  difficulty: string,
  cuisine: string,
  caloriesPerServing: number,
  tags: string[],
  userId: number,
  image: string,
  rating: number,
  reviewCount: number,
  mealType: string[]
}

export type TCardRecipe = TRecipe & { isLiked: boolean, isVisible: boolean };

export type TNewRecipe = Partial<Record<keyof TRecipe, string>>;