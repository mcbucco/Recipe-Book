import React from "react";
import { currentPageSelector, pageSizeSelector, recipesCountSelector, setCurrentPage } from "../services/slices/recipes-list-slice";
import { useDispatch, useSelector } from "../services/store";
import PaginatorUI from "../ui/PaginatorUI";

const Paginator: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector) ?? 1;
  const cards = useSelector(recipesCountSelector);
  const pageSize = useSelector(pageSizeSelector);
  const totalPages = Math.ceil(cards / pageSize);

  const handleClick = (page: number) => {
    dispatch(setCurrentPage(page));
  }
  
  return <PaginatorUI currentPage={currentPage} totalPages={totalPages} onClick={handleClick}></PaginatorUI>;
};

export default Paginator;
