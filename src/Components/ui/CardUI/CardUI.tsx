import "./CardUI.css";
import LikeIcon from "../Icon/LikeIcon/LikeIcon";
import RemoveIcon from "../Icon/RemoveIcon";
import { TCardRecipe } from "../../utils/types";
import clsx from "clsx";
import Button from "../ButtonUI";
import { Link } from "react-router-dom";

export type TCardUIProps = {
  card: TCardRecipe;
  likeCard: (id: number) => void;
  removeCard: (id: number) => void;
};

const CardUI = ({ card, likeCard, removeCard }: TCardUIProps) => {
  const handleLikeClick = () => {
    likeCard(card.id);
  };
  const handleRemoveClick = () => {
    removeCard(card.id);
  };

  const likeBtnClass = clsx(
    "card__like-button",
    card.isLiked && "card__like-button_active"
  );

  return (
    <li className="card">
      <Link className="card__link" to={`/ingredients/${card.id}`}>
        <img className="card__image" src={card.image} alt={card.name} />
        <div className="card__description">
          <h3 className="card__description__text">{card.name}</h3>
        </div>
      </Link>
          <Button className={likeBtnClass} onClick={handleLikeClick}>
            <LikeIcon />
          </Button>
          <Button className="card__delete-button" onClick={handleRemoveClick}>
            <RemoveIcon />
          </Button>
    </li>
  );
};

export default CardUI;
