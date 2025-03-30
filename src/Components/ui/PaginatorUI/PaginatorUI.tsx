import clsx from "clsx";
import { ReactNode } from "react";
import "./PaginatorUI.css";
import { nanoid } from "@reduxjs/toolkit";

type TPaginatorUIProps = {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
};

const PaginatorUI: React.FC<TPaginatorUIProps> = ({
  currentPage,
  totalPages,
  onClick
}) => {

  const handleClick = (page: number) => onClick(page);
  let pages: ReactNode = [];
  for (let i = 1; i <= totalPages; i++) {
    const pageClass = clsx(
      "paginator_page",
      currentPage === i && "paginator_page__isActive"
    );
    pages = [...pages, <li key={nanoid(3)} className={pageClass} onClick={() => handleClick(i)}>{i}</li>];
  }
  return (
    <nav>
      <ol className="paginator">{pages}</ol>
    </nav>
  );
};

export default PaginatorUI;
