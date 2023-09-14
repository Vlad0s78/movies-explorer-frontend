import React from "react";

function FilterCheckbox({ onChange, isChecked }) {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__input" checked={isChecked} onChange={onChange} />
      <span className="filter-checkbox__slider"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
