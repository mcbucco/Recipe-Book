import { useEffect, useState } from "react";
import FormUI from "../ui/FormUI";
import { useDispatch } from "../services/store";
import { addRecipe } from "../services/slices/recipes-list-slice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const AddCardForm: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFieldValues = {
    name: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "",
    cuisine: "",
    caloriesPerServing: "",
    tags: "",
    image: "",
    mealType: "",
  };

  const initialFieldValidity = {
    name: false,
    ingredients: false,
    instructions: false,
    prepTimeMinutes: false,
    cookTimeMinutes: false,
    servings: false,
    difficulty: false,
    cuisine: false,
    caloriesPerServing: false,
    tags: false,
    image: false,
    mealType: false,
  }

  const [formFieldValues, setFormFieldValues] = useState(initialFieldValues);

  const [formFieldsValidity, setFormFieldsValidity] = useState(initialFieldValidity);

  const [formValidity, setFormValidity] = useState(false);

  useEffect(() => {
    setFormValidity(Object.values(formFieldsValidity).every((field) => field));
  }, [formFieldsValidity]);

  const handleReset = () => {
    setFormFieldValues(initialFieldValues);
    setFormFieldsValidity(initialFieldValidity);
    setFormValidity(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recipe = {
      name: formFieldValues.name,
      ingredients: [formFieldValues.ingredients],
      instructions: [formFieldValues.instructions],
      prepTimeMinutes: Number(formFieldValues.prepTimeMinutes),
      cookTimeMinutes: Number(formFieldValues.cookTimeMinutes),
      servings: Number(formFieldValues.servings),
      difficulty: formFieldValues.difficulty,
      cuisine: formFieldValues.cuisine,
      caloriesPerServing: Number(formFieldValues.caloriesPerServing),
      tags: [formFieldValues.tags],
      image: formFieldValues.image,
      mealType: [formFieldValues.mealType],
      id: Number(nanoid(10).length + Math.random()*100),
      userId: Number(nanoid(10).length + Math.random()*100),
      rating: 0,
      reviewCount: 0,
    }
    dispatch(addRecipe(recipe));
    navigate('/');
  }

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, validity, value } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement;

    setFormFieldValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setFormFieldsValidity((prevState) => ({
      ...prevState,
      [id]: validity.valid,
    }));
  };

  return (
    <FormUI
      fieldValues={formFieldValues}
      formValidity={formValidity}
      onInput={handleInput}
      onReset={handleReset}
      onSubmit={handleSubmit}
    />
  );
};

export default AddCardForm;
