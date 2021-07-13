import { Fragment, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { ActionButton } from "./ActionButton";
import { Book } from "../components/Book";
import CloseIcon from "@material-ui/icons/Close";
import { ConfirmDialog } from "./ConfirmDialog";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

const BooksList = ({ books }) => {
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
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
                />
                <TableCell>
                  <ActionButton
                    color="secondary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are You Sure You want to Remove this Book?",
                        subTitle: "You cannot undo this change",
                      });
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
            {/* {books.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                category={book.category}
                pages={book.pages}
                read={book.read}
              />
            ))}
            <TableCell>
              <ActionButton
                color="secondary"
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Are You Sure You want to Delete Patient?",
                    subTitle: "You cannot undo this change",
                  });
                }}
              >
                <CloseIcon fontSize="small" />
              </ActionButton>
            </TableCell> */}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ books: state.books });
export default connect(mapStateToProps, null)(BooksList);
