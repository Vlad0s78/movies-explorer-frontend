import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();
  const moviesPage = location.pathname === "/movies";
  const savedMoviesPage = location.pathname === "/saved-movies";

  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    if (moviesPage) {
      setIsSaved(!isSaved);
    }
  };

  const buttonElement = savedMoviesPage ? (
    <button type="button" className="movie-card__button">
      &#215;
    </button>
  ) : isSaved ? (
    <button type="button" className={`movie-card__button movie-card__button_type_save`}>
      &#10003;
    </button>
  ) : (
    <button type="button" className="movie-card__button" onClick={handleSaveClick}>
      Сохранить
    </button>
  );

  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <h5 className="movie-card__name">{props.card.nameRU}</h5>
        <span className="movie-card__duration">0ч 42м</span>
      </div>
      <a className="movie-card__trailer-link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie-card__photo" src={props.card.image} alt="Заставка фильма"></img>
      </a>
      {buttonElement}
    </li>
  );
}

export default MoviesCard;
