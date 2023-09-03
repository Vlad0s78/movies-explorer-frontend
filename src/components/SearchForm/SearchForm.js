import FilterCheckbox from "../FilterCheckBox/FilterCheckBox";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <label className="search-form__label">
            <input type="text" className="search-form__input" placeholder="Фильм" required />
            <button className="search-form__button button">Поиск</button>
          </label>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
