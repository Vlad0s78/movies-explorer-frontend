import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({ isLoggedIn, filterByName, savedMovies, deleteMovies }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filterShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
  };

  useEffect(() => {
    if (savedMovies) {
      setFilteredMovies(isShortMovies ? filterShortMovies(savedMovies) : savedMovies);
    }
    return;
  }, [savedMovies, isShortMovies]);

  const searchByMyMovies = (inputText) => {
    setSearchText(inputText);
    if (savedMovies) {
      setFilteredMovies(filterByName(savedMovies, inputText));
    }
  };

  const handleCheckboxChange = () => {
    setIsShortMovies(!isShortMovies);
  };

  const handleDeleteMovie = ({ _id: id }) => {
    deleteMovies(id);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main">
        <SearchForm onSubmit={searchByMyMovies} onCheckboxChange={handleCheckboxChange} isShortMovies={isShortMovies} onChange={handleCheckboxChange} />
        <MoviesCardList movies={filteredMovies} onClick={handleDeleteMovie} searchText={searchText} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
