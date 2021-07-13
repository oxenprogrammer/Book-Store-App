import { Fragment, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { connect, useDispatch } from "react-redux";

import { Book } from "../components/Book";
import { Notification } from "./Notification";
import Paper from "@material-ui/core/Paper";
import { removeBook } from "../actions/index";

const BooksList = ({ books }) => {

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const dispatch = useDispatch();

  const handleRemoveBook = async (bookId) => {
    await dispatch(removeBook(bookId));
    setNotify({
      isOpen: true,
      message: `Successfully Removed the Book with ID ${bookId}`,
      type: "info",
    });
  };

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Pages</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  category={book.category}
                  pages={book.pages}
                  read={book.read}
                  handleRemoveBook={handleRemoveBook}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Notification notify={notify} setNotify={setNotify} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ books: state.books });
export default connect(mapStateToProps, null)(BooksList);
