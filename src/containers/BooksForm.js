import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { connect, useDispatch } from "react-redux";

import { addBook } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "99%",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  button: {
    backgroundColor: "#0290ff",
    color: "#ffffff",
    fontWeight: "lighter",
  },
}));

export const categories = [
  "All",
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

const BooksForm = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook("");
  };

  const classes = useStyles();

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="text"
        id="title"
        name="title"
        label="Book Title"
        variant="filled"
        onChange={handleChange}
      />
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          name="category"
          labelId="category"
          id="category"
          onChange={handleChange}
          onBlur={handleChange}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        type="text"
        id="author"
        name="author"
        label="Author"
        variant="filled"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" className={classes.button}>
        Add Book
      </Button>
    </form>
  );
};

export default connect(null)(BooksForm);
