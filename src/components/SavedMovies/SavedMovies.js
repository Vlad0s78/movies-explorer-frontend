import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { cardList } from "../../utils/cardList"; // Временное решение для теста вёрстки

function SavedMovies() {
  const savedMovies = cardList.slice(0, 3);
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList cardList={savedMovies} />
    </section>
  );
}

export default SavedMovies;
