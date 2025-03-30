import {
  currentPageSelector,
  deleteRecipe,
  likeRecipe,
  pageSizeSelector,
  recipesSelector,
} from "../services/slices/recipes-list-slice";
import { useDispatch, useSelector } from "../services/store";
import CardsContainerUI from "../ui/CardsContainerUI";

const CardsContainer = () => {
  const dispatch = useDispatch();
  
  const allRecipes = useSelector(recipesSelector);
  const page = useSelector(currentPageSelector) ?? 1;
  const pageSize = useSelector(pageSizeSelector);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const handleLikeClick = (id: number) => {
    dispatch(likeRecipe(id));
  };
  
  const handleRemoveClick = (id: number) => {
    dispatch(deleteRecipe(id));
  };
  
  const cards = allRecipes.slice(startIndex, endIndex).map((card) => ({
    card,
    likeCard: handleLikeClick,
    removeCard: handleRemoveClick,
  }));

  return <CardsContainerUI cardsList={cards}></CardsContainerUI>;
};

export default CardsContainer;
