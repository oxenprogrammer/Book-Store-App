import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const BooksForm = () => {
  const categories = [
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ];

  const [category, setCategory] = useState();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        type="text"
        id="title"
        name="title"
        label="Book Title"
        variant="filled"
      />
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={category}
          onChange={handleChange}
          defaultValue="Action"
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        type="number"
        id="pages"
        name="pages"
        label="Number of Pages"
        variant="filled"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Book
      </Button>
    </form>
  );
};

export default BooksForm;
