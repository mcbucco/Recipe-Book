import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllRecipesApi } from "../../utils/api";
import { TRecipe, TCardRecipe } from "../../utils/types";

export const getAllRecipes = createAsyncThunk(
  "recipes/getAll",
  getAllRecipesApi
);

type TRecipesListState = {
  recipes: TCardRecipe[];
  loadingError: string | null;
  loading: boolean;
};

const initialState: TRecipesListState = {
  recipes: [],
  loadingError: null,
  loading: false,
};

export const recipesListSlice = createSlice({
  name: "recipes-list",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<TRecipe>) => {
      const newRecipe = {
        ...action.payload,
        isLiked: false,
        isVisible: true,
      };
      console.log(newRecipe);
      state.recipes = [
        newRecipe,
        ...state.recipes
      ];
    },
    resetFilters: (state) => state.recipes.forEach(recipe => recipe.isVisible = true),
    filterRecipe: (state, action: PayloadAction<string>) => {
      const [optionGroup, option] = action.payload.split('::');
      if (optionGroup === '') {
        recipesListSlice.caseReducers.resetFilters(state);
        return;
      }
      if (optionGroup === 'isLiked') {
        if (option === 'С лайком') {
          state.recipes.forEach(recipe => {
            if (recipe.isLiked) recipe.isVisible = true
            else recipe.isVisible = false
          });
        } else state.recipes.forEach(recipe => {
          if (recipe.isLiked) recipe.isVisible = false
          else recipe.isVisible = true
        }
      );
      }  else state.recipes.forEach(recipe => {
        if (recipe[optionGroup as keyof TCardRecipe] !== option) {
          recipe.isVisible = false
        };
      });
    },
    deleteRecipe: (state, action: PayloadAction<number>) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      state.recipes = updatedRecipes;
    },
    likeRecipe: (state, action: PayloadAction<number>) => {
      const recipeIndex = state.recipes.findIndex(recipe => recipe.id === action.payload);
      state.recipes[recipeIndex].isLiked = !state.recipes[recipeIndex].isLiked;
    },
  },
  selectors: {
    recipesSelector: (state) => state.recipes,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllRecipes.fulfilled,
        (state, action: PayloadAction<TRecipe[]>) => {
          state.loading = false;
          state.recipes = action.payload.map((item) => ({
            isLiked: false,
            isVisible: true,
            ...item,
          }));
        }
      )
      .addCase(getAllRecipes.rejected, (state) => {
        state.loading = false;
        state.loadingError = 'Loading data error'
      });
  },
});

export const { recipesSelector } = recipesListSlice.selectors;
export const {  addRecipe, deleteRecipe, filterRecipe, likeRecipe, resetFilters } = recipesListSlice.actions;
