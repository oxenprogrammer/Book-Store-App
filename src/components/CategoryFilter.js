import PropTypes from "prop-types";
import React from "react";
import { categories } from "../containers/BooksForm";

export const CategoryFilter = ({ handleChange }) => {
  return (
    <select onBlur={handleChange} onChange={handleChange}>
      {categories.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
