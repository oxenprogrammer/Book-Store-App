import { ActionButton } from "../containers/ActionButton";
import CloseIcon from "@material-ui/icons/Close";
import { Fragment } from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";

export const Book = (props) => {
  const { id, title, category, pages, read, handleRemoveBook } = props;
  return (
    <Fragment>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{pages}</TableCell>
      <TableCell>{read}</TableCell>
      <TableCell>
        <ActionButton color="secondary" onClick={() => handleRemoveBook(id)}>
          <CloseIcon fontSize="small" />
        </ActionButton>
      </TableCell>
    </Fragment>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    pages: PropTypes.number,
    read: PropTypes.string,
  }),
};
Book.defaultProps = {
  book: null,
};
