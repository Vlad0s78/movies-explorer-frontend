import React, { useState, useEffect, useCallback } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies, onClick, savedMovies, searchText }) {
  const location = useLocation();
  const moviesPage = location.pathname === "/movies";
  const [initialCount, setInitialCount] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isSavedPage = location.pathname === "/saved-movies";

  const resultsMessage = () => {
    if (isSavedPage) {
      return searchText ? "Ничего не найдено." : "Сохраненных фильмов нет";
    } else {
      return searchText ? "Ничего не найдено." : "Нужно ввести ключевое слово";
    }
  };

  const handleWindowResize = useCallback(() => {
    if (windowWidth !== window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  }, [windowWidth]);

  useEffect(() => {
    let resizeTimer;
    const delayedWindowResizeHandler = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        handleWindowResize();
      }, 100);
    };

    window.addEventListener("resize", delayedWindowResizeHandler);

    return () => {
      window.removeEventListener("resize", delayedWindowResizeHandler);
    };
  }, [handleWindowResize]);

  const adjustInitialCount = () => {
    switch (true) {
      case windowWidth >= 1280:
        setInitialCount((prevCount) => prevCount + 3);
        break;
      default:
        setInitialCount((prevCount) => prevCount + 2);
        break;
    }
  };

  useEffect(() => {
    switch (true) {
      case windowWidth > 1023:
        setInitialCount(12);
        break;
      case windowWidth <= 1023 && windowWidth > 750:
        setInitialCount(8);
        break;
      case windowWidth >= 320 && windowWidth <= 1023:
        setInitialCount(5);
        break;
      default:
        break;
    }
  }, [windowWidth]);

  const handleIsLike = (movie) => {
    if (!isSavedPage) {
      const savedMovie = savedMovies.find((film) => film.movieId === movie.id);
      return !!savedMovie;
    }
    return true;
  };

  return (
    <section className="movies">
      {movies.length === 0 ? (
        <p className="movies__message">{resultsMessage()}</p>
      ) : (
        <>
          <ul className="movies__list">
            {isSavedPage
              ? movies.map((movie) => {
                  return <MoviesCard card={movie} key={isSavedPage ? movie._id : movie.id} onClick={onClick} isLike={handleIsLike(movie)} />;
                })
              : movies.slice(0, initialCount).map((movie) => {
                  return <MoviesCard card={movie} key={isSavedPage ? movie._id : movie.id} onClick={onClick} isLike={handleIsLike(movie)} />;
                })}
          </ul>
          {moviesPage && initialCount < movies.length ? (
            <button className="movies__button-more button" onClick={adjustInitialCount}>
              Ещё
            </button>
          ) : null}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
