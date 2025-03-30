import { TCardRecipe } from "./types";

export const generateFilters = (cards: TCardRecipe[]) => {
  const difficultySet = new Set<string>();
  const cuisineSet = new Set<string>();
  const mealTypeSet = new Set<string>();

  for (const card of cards) {
    difficultySet.add(card.difficulty);
    cuisineSet.add(card.cuisine);
    card.mealType.forEach(mealType => mealTypeSet.add(mealType));
  }

  const filters = [
    {
      title: 'Сложность приготовления',
      optionGroup: 'difficulty',
      options: Array.from(difficultySet)
    },
    {
      title: 'Кухня',
      optionGroup: 'cuisine',
      options: Array.from(cuisineSet)
    },
    {
      title: 'Тип',
      optionGroup: 'mealType',
      options: Array.from(mealTypeSet)
    }
  ]

  return filters;
}