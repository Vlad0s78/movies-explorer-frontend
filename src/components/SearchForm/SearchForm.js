import React, { useEffect, useState } from "react";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import { useLocation } from "react-router";

function SearchForm({ onSubmit, onCheckboxChange, isShortMovies }) {
  const [values, setValues] = useState({ lowerText: "" });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const location = useLocation();
  const isMySaveMoviesPage = location.pathname === "/saved-movies";

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    onSubmit(values.lowerText, isShortMovies);
  };

  useEffect(() => {
    if (isMySaveMoviesPage) {
      setValues("");
    } else {
      const savedSearch = localStorage.getItem("textSearch");
      setValues({ lowerText: savedSearch });
    }
  }, [setValues, isMySaveMoviesPage]);

  useEffect(() => {
    setIsButtonDisabled(!values.lowerText);
  }, [values.lowerText]);

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSearch}>
          <label className="search-form__label">
            <input type="text" className="search-form__input" name="lowerText" placeholder="Фильм" onChange={handleChange} value={values.lowerText ?? ""} />
            <button className="search-form__button button" disabled={isButtonDisabled}>
              Поиск
            </button>
          </label>
          <FilterCheckBox onChange={onCheckboxChange} isChecked={isShortMovies} />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
