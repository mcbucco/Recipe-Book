import { nanoid } from "@reduxjs/toolkit";
import { TCardRecipe } from "../../utils/types";
import "./CardDetailsUI.css";
import ButtonUI from "../ButtonUI";
import { Link } from "react-router-dom";

type TCardDetailsUIProps = {
  cardDetails: TCardRecipe;
};

const CardDetailsUI: React.FC<TCardDetailsUIProps> = ({ cardDetails }) => {
  const cardIngredients = cardDetails.ingredients.map((ingredient) => (
    <li key={nanoid()}>{ingredient}</li>
  ));
  const cookInstruction = cardDetails.instructions.map((toDo) => (
    <li key={nanoid()}>{toDo}</li>
  ));
  return (
    <div className="card_details">
      <h3 className="card_details__name">{cardDetails.name}</h3>
      <img
        className="card_details__image"
        src={cardDetails.image}
        alt={cardDetails.name}
      />
      <div className="card_details__recipe">
      </div>
      <span>
        Время приготовления:{" "}
        {cardDetails.cookTimeMinutes + cardDetails.prepTimeMinutes} минут
      </span>

      <h4 className="card_details__ingredients_heading">Ингредиенты</h4>
      <ul className="card_details__ingredients">{cardIngredients}</ul>

      <h4 className="card_details__instructions_heading">Рецепт приготовления</h4>
      <ul className="card_details__instructions">{cookInstruction}</ul>

      <ButtonUI className="card_details__button">
        <Link to={'/'}>Вернуться на главную</Link>
      </ButtonUI>
    </div>
  );
};

export default CardDetailsUI;
