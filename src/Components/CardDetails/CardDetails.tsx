import { useParams } from "react-router-dom";
import CardDetailsUI from "../ui/CardDetailsUI";
import { useSelector } from "react-redux";
import { recipesSelector } from "../services/slices/recipes-list-slice";

const CardDetails: React.FC = () => {
  const { id } = useParams();
  const card = useSelector(recipesSelector).find(recipe => recipe.id === Number(id));
  return (
  card &&  <CardDetailsUI cardDetails={card} />
  )
}

export default CardDetails;