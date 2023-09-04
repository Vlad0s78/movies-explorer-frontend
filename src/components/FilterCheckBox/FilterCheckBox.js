function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__input" />
      <span className="filter-checkbox__slider"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
