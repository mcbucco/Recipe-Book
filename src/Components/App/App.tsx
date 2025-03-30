import "./App.css";
import AddCardForm from "../AddCardForm";
import AppHeader from "../AppHeader";
import CardDetails from "../CardDetails";
import CardsContainer from "../CardsContainer/CardsContainer";
import Filter from "../Filter";
import { useDispatch } from "../services/store";
import { getAllRecipes } from "../services/slices/recipes-list-slice";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddRecipeButton from "../AddRecipeButton";
import Paginator from "../Paginator";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Navigate to={`/products`} replace />} />
        <Route
          path="/products"
          element={
            <>
              <AddRecipeButton />
              <Filter />
              <Paginator />
              <CardsContainer />
            </>
          }
        />
        <Route path="ingredients/:id" element={<CardDetails />} />
        <Route path="/create-product" element={<AddCardForm />} />
      </Routes>
    </>
  );
}

export default App;
