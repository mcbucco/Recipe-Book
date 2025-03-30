import './App.css'
import AddCardForm from '../AddCardForm';
import AppHeader from '../AppHeader';
import ButtonUI from '../ui/ButtonUI';
import CardDetails from '../CardDetails';
import CardsContainer from '../CardsContainer/CardsContainer';
import Filter from '../Filter';
import { useDispatch } from '../services/store';
import { getAllRecipes } from '../services/slices/recipes-list-slice';
import { useEffect } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);
    
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path='/' element={<Navigate to={`/products`} replace/>} />
        <Route path='/products' element={
          <>
          <ButtonUI className='add_recipe'><Link to={'/create-product'}>Добавить рецепт</Link></ButtonUI>
          <Filter />
          <CardsContainer />
          </>
        } />
        <Route path='ingredients/:id' element={<CardDetails />}/>
        <Route path='/create-product' element={<AddCardForm />} />
      </Routes>
      
    </>
  )
}

export default App
