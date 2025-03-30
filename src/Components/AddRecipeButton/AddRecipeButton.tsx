import { Link } from "react-router-dom"
import ButtonUI from "../ui/ButtonUI"

const AddRecipeButton: React.FC = () => <ButtonUI className='add_recipe'><Link to={'/create-product'}>Добавить рецепт</Link></ButtonUI>

export default AddRecipeButton;