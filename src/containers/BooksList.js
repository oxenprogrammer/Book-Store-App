import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { Book } from "../components/Book";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

const BooksList = ({ books }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Pages</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              pages={book.pages}
              read={book.read}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({ books: state.books });
export default connect(mapStateToProps, null)(BooksList);
