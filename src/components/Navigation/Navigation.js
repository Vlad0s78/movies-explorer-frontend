import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const moviesPage = location.pathname === "/movies";
  const savedMovies = location.pathname === "/saved-movies";
  const profilePage = location.pathname === "/profile";

  // Временное решение для теста вёрстки.
  const isMoviesPage = moviesPage || savedMovies || profilePage;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navigation ${isMenuOpen ? "navigation_active" : ""}`}>
        <button className="navigation__button-close button" onClick={toggleMenu}></button>
        <ul className="navigation__container-link">
          {!isAuth && isMenuOpen && (
            <li className="navigation__item">
              <Link to="/" replace className="navigation__link link">
                Главная
              </Link>
            </li>
          )}
          <li className="navigation__item">
            <Link to="/movies" replace className={`navigation__link ${moviesPage ? "navigation__link_active" : ""} link`}>
              Фильмы
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/saved-movies" replace className={`navigation__link ${savedMovies ? "navigation__link_active" : ""} link`}>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" replace className="navigation__link link">
          <div className="navigation__container-profile">
            <p className="navigation__link-account">Аккаунт</p>
            <button type="button" className={`navigation__button-profile ${isMoviesPage ? "navigation__button-profile_type_profile" : ""}`}></button>
          </div>
        </Link>
      </nav>
      <button type="button" className={`navigation-button-nav button ${isMoviesPage ? "navigation-button-nav_type_movies" : ""}`} onClick={toggleMenu}></button>
      <div className={`navigation-overlay ${isMenuOpen ? "navigation-overlay_active" : ""}`} onClick={toggleMenu}></div>
    </>
  );
}

export default Navigation;
