/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { changeFilter, removeBook } from "../actions/index";
import { connect, useDispatch } from "react-redux";

import { Book } from "../components/Book";
import { CategoryFilter } from "../components/CategoryFilter";
import { Notification } from "./Notification";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    flexDirection: "column",
    padding: "1rem",
  },
  paper: {
    marginBottom: "0.938rem",
  },
}));

const BooksList = ({ books, filter }) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
    setNotify({
      isOpen: true,
      message: `Successfully Removed the Book with ID ${bookId}`,
      type: "warning",
    });
  };

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };

  const [spacing, setSpacing] = useState(2);

  const classes = useStyles();

  return (
    <Fragment>
      <CategoryFilter handleChange={handleFilterChange} />
      <Grid container className={classes.root} spacing={2}>
        {filter === "All"
          ? books.map((book) => (
              <Paper xs={12} className={classes.paper} key={book.id}>
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  category={book.category}
                  author={book.author}
                  read={book.read}
                  handleRemoveBook={handleRemoveBook}
                />
              </Paper>
            ))
          : books
              .filter((book) => book.category === filter)
              .map((book) => (
                <Paper xs={12} className={classes.paper} key={book.id}>
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    category={book.category}
                    author={book.author}
                    read={book.read}
                    handleRemoveBook={handleRemoveBook}
                  />
                </Paper>
              ))}
      </Grid>
      <Notification notify={notify} setNotify={setNotify} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filterReducer,
});
export default connect(mapStateToProps, null)(BooksList);
