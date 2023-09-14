import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();
  const savedMoviesPage = location.pathname === "/saved-movies";

  const imageMovie = location.pathname === "/saved-movies" ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`;

  const handleSaveClick = () => {
    props.onClick(props.card);
  };

  function timeConverter(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }

  const buttonElement = savedMoviesPage ? (
    <button type="button" className="movie-card__button" onClick={handleSaveClick}>
      &#215;
    </button>
  ) : props.isLike ? (
    <button type="button" className={`movie-card__button movie-card__button_type_save`} onClick={handleSaveClick}>
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
        <span className="movie-card__duration">{timeConverter(props.card.duration)}</span>
      </div>
      <a className="movie-card__trailer-link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie-card__photo" src={imageMovie} alt="Заставка фильма"></img>
      </a>
      {buttonElement}
    </li>
  );
}

export default MoviesCard;
