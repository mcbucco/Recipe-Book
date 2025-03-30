import { useState } from "react";
import {
  recipesSelector,
  filterRecipe,
  resetFilters,
} from "../services/slices/recipes-list-slice";
import { useDispatch, useSelector } from "../services/store";
import FilterUI from "../ui/FilterUI";
import { generateFilters } from "../utils/tools";

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("::Все");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    dispatch(resetFilters());
    dispatch(filterRecipe(e.target.value));
  };
  const cards = useSelector(recipesSelector);
  let cardsFilters = generateFilters(cards);
  cardsFilters = [
    {
      title: "",
      optionGroup: "",
      options: ["Все"],
    },
    {
      title: "Нравится",
      optionGroup: "isLiked",
      options: ["С лайком", "Без лайка"],
    },
    ...cardsFilters,
  ];
  const label = "recipe-select";
  return (
    <FilterUI
      filters={cardsFilters}
      label={label}
      value={value}
      onChange={handleChange}
    ></FilterUI>
  );
};
export default Filter;
