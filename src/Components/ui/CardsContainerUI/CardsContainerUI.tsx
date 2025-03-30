import Card, { TCardUIProps } from "../CardUI/CardUI";
import "./CardsContainerUI.css";

type TCardsContainerUIProps = {
  cardsList: TCardUIProps[];
}

const CardsContainerUI: React.FC<TCardsContainerUIProps> = ({ cardsList }: TCardsContainerUIProps) => {
  const cards = cardsList.map((cardItem) => (cardItem.card.isVisible &&
    <Card
      key={cardItem.card.id}
      card={cardItem.card}
      likeCard={cardItem.likeCard}
      removeCard={cardItem.removeCard}
    ></Card>
  ));
  return <ul className="cards-container">{cards}</ul>;
};

export default CardsContainerUI;
