import ButtonUI from "../ButtonUI";
import "./FormUI.css";
import { TNewRecipe } from "../../utils/types";

export

type TFormUIProps = {
  fieldValues: TNewRecipe;
  formValidity: boolean;
  onInput?: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onReset?: () => void;
};

const FormUI: React.FC<TFormUIProps> = ({
  formValidity,
  fieldValues,
  onInput,
  onSubmit,
  onReset,
}) => {
  return (
    <form onSubmit={onSubmit} onReset={onReset} className="form">
      <label htmlFor="name">Название</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        minLength={3}
        onInput={onInput}
        value={fieldValues.name}
      />

      <label htmlFor="ingredients">Ингредиенты</label>
      <input
        type="text"
        name="ingredients"
        id="ingredients"
        minLength={3}
        onInput={onInput}
        value={fieldValues.ingredients}
        required
      />

      <label htmlFor="instructions">Действия</label>
      <textarea
        name="instructions"
        id="instructions"
        minLength={3}
        onInput={onInput}
        value={fieldValues.instructions}
        required
      />

      <label htmlFor="prepTimeMinutes">Время подготовительное</label>
      <input
        type="number"
        min={1}
        name="prepTimeMinutes"
        id="prepTimeMinutes"
        value={fieldValues.prepTimeMinutes}
        onInput={onInput}
        required
      />

      <label htmlFor="cookTimeMinutes">Время приготовления</label>
      <input
        type="number"
        min={1}
        name="cookTimeMinutes"
        id="cookTimeMinutes"
        onInput={onInput}
        value={fieldValues.cookTimeMinutes}
        required
      />

      <label htmlFor="servings">Количество порций</label>
      <input
        type="number"
        min={1}
        name="servings"
        id="servings"
        onInput={onInput}
        value={fieldValues.servings}
        required
      />

      <label htmlFor="difficulty">Сложность приготовления</label>
      <input
        type="text"
        name="difficulty"
        id="difficulty"
        minLength={3}
        onInput={onInput}
        value={fieldValues.difficulty}
        required
      />

      <label htmlFor="cuisine">Регион</label>
      <input
        type="text"
        name="cuisine"
        id="cuisine"
        minLength={3}
        onInput={onInput}
        value={fieldValues.cuisine}
        required
      />

      <label htmlFor="caloriesPerServing">Калорийность порции</label>
      <input
        type="number"
        min={10}
        max={1500}
        name="caloriesPerServing"
        id="caloriesPerServing"
        onInput={onInput}
        value={fieldValues.caloriesPerServing}
        required
      />

      <label htmlFor="tags">Тэги</label>
      <input
        type="text"
        name="tags"
        id="tags"
        minLength={3}
        onInput={onInput}
        value={fieldValues.tags}
        required
      />

      <label htmlFor="image">Изображение</label>
      <input
        type="url"
        name="image"
        id="image"
        required
        onInput={onInput}
        value={fieldValues.image}
      />

      <label htmlFor="mealType">Блюдо на (перекус, завтрак, ужин...)</label>
      <input
        type="text"
        name="mealType"
        id="mealType"
        required
        minLength={3}
        onInput={onInput}
        value={fieldValues.mealType}
      />
      <div className="form__buttons_container">
        <ButtonUI
          disabled={!formValidity}
          className="form__button form__button_submit"
          type="submit"
        >
          Добавить рецепт
        </ButtonUI>
        <ButtonUI
          className="form__button form__button_reset"
          type="reset"
        >
          Сбросить значения
        </ButtonUI>
      </div>
    </form>
  );
};

export default FormUI;
