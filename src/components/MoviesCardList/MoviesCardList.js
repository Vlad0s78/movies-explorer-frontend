import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ cardList }) { // Временное решение для теста вёрстки
  const location = useLocation();

  const moviesPage = location.pathname === "/movies";

  return (
    <section className="movies">
      <ul className="movies__list">
        {cardList.map((card, i) => {
          return <MoviesCard card={card} key={i} />;
        })}
      </ul>

      {moviesPage ? <button className="movies__button-more button">Ещё</button> : null}
    </section>
  );
}

export default MoviesCardList;
