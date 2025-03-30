import {
  deleteRecipe,
  likeRecipe,
  recipesSelector,
} from "../services/slices/recipes-list-slice";
import { useDispatch, useSelector } from "../services/store";
import CardsContainerUI from "../ui/CardsContainerUI";

const CardsContainer = () => {
  const dispatch = useDispatch();
  
  const recipes = useSelector(recipesSelector);

  const handleLikeClick = (id: number) => {
    dispatch(likeRecipe(id));
  };
  
  const handleRemoveClick = (id: number) => {
    dispatch(deleteRecipe(id));
  };
  
  const cards = recipes.map((card) => ({
    card,
    likeCard: handleLikeClick,
    removeCard: handleRemoveClick,
  }));

  return <CardsContainerUI cardsList={cards}></CardsContainerUI>;
};

export default CardsContainer;
