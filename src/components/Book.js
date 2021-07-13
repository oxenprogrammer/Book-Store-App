import { Fragment } from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";

export const Book = ({ id, title, category, pages, read }) => (
  <Fragment>
    <TableCell>{id}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{category}</TableCell>
    <TableCell>{pages}</TableCell>
    <TableCell>{read}</TableCell>
  </Fragment>
);

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
