import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import { getAllMovies } from "../../utils/MoviesApi";

function Movies({ isLoggedIn, filterByName, myMovies, savedMovies, deleteMovies }) {
  const [filterMovies, setFilterMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filterShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
  };

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("filteredMovies"));
    if (savedMovies) {
      if (savedMovies.length !== 0) {
        setFilterMovies(isShortMovies ? filterShortMovies(savedMovies) : savedMovies);
        setIsShortMovies(JSON.parse(localStorage.getItem("isShortMovie")));
      }
    }
  }, [isShortMovies]);

  const handleCheckboxChange = () => {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      const shortMovies = filterShortMovies(filterMovies);
      setFilterMovies(shortMovies);
    } else {
      const allMovies = JSON.parse(localStorage.getItem("allMovies")) || [];
      filterAllMovies(allMovies, localStorage.getItem("textSearch"));
    }

    localStorage.setItem("isShortMovie", !isShortMovies);
  };

  const filterAllMovies = (movies, text) => {
    const filteredMovies = filterByName(movies, text);
    localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    setFilterMovies(filteredMovies);
  };

  const searchMovie = (text) => {
    setIsLoading(true);
    setSearchText(text);
    getAllMovies()
      .then((data) => {
        localStorage.setItem("allMovies", JSON.stringify(data));
        filterAllMovies(data, text);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке фильмов:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    localStorage.setItem("isShortMovie", isShortMovies);
    localStorage.setItem("textSearch", text);
  };

  const handleSaveClick = (movies) => {
    const deleteMyMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movies.id);
    if (deleteMyMovie) {
      deleteMovies(deleteMyMovie._id);
      return;
    }
    myMovies(movies);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main">
        <SearchForm onSubmit={searchMovie} onCheckboxChange={handleCheckboxChange} isShortMovies={isShortMovies} />
        {isLoading ? <Preloader /> : <MoviesCardList movies={filterMovies} onClick={handleSaveClick} savedMovies={savedMovies} searchText={searchText} />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
