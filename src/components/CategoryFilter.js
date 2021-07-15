import PropTypes from "prop-types";
import React from "react";
import { categories } from "../containers/BooksForm";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "98%",
    padding: "1rem 0",
    margin: "1rem 0 0 0.5rem",
    cursor: "pointer",
  },
}));

export const CategoryFilter = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <select
      className={classes.root}
      onBlur={handleChange}
      onChange={handleChange}
    >
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
