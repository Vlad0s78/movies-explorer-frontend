import React, { useEffect, useState } from "react";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

function SearchForm({ onSubmit, onCheckboxChange, isShortMovies }) {
  const [values, setValues] = useState({ lowerText: "" });

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    onSubmit(values.lowerText);
  };

  useEffect(() => {
    const savedSeach = localStorage.getItem("textSearch");
    setValues({ lowerText: savedSeach });
  }, [setValues]);

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSearch}>
          <label className="search-form__label">
            <input type="text" className="search-form__input" name="lowerText" placeholder="Фильм" onChange={handleChange} value={values.lowerText ?? ""} required />
            <button className="search-form__button button">Поиск</button>
          </label>
          <FilterCheckBox onChange={onCheckboxChange} isChecked={isShortMovies} />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
