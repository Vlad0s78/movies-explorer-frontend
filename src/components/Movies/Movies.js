import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { getAllMovies } from "../../utils/MoviesApi";

function Movies({ isLoggedIn, filterByName, myMovies, savedMovies, deleteMovies }) {
  const [filterMovies, setFilterMovies] = useState([]);
  const checkIsShotMovies = JSON.parse(localStorage.getItem("isShortMovies")) ?? false;
  const [isShortMovies, setIsShortMovies] = useState(checkIsShotMovies);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const moviesAll = JSON.parse(localStorage.getItem("allMovies")) ?? [];

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
  }, [isShortMovies, searchText, isLoggedIn]);

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

  const filterAllMovies = (movies, text, check) => {
    const filteredMovies = filterByName(movies, text);
    localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    setFilterMovies(check ? filterShortMovies(filteredMovies) : filteredMovies);
  };

  const searchMovie = (text, isShortMovies) => {
    setIsLoading(true);
    setSearchText(text);
    if (text) {
      if (!moviesAll.length) {
        getAllMovies()
          .then((data) => {
            localStorage.setItem("allMovies", JSON.stringify(data));
            filterAllMovies(data, text, isShortMovies);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Ошибка при загрузке фильмов:", error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        filterAllMovies(moviesAll, text, isShortMovies);
        setIsLoading(false);
      }
      console.log(text);
      localStorage.setItem("isShortMovie", isShortMovies);
      localStorage.setItem("textSearch", text);
    } else {
      localStorage.setItem("textSearch", text);
      filterAllMovies([], text, isShortMovies);
    }
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
