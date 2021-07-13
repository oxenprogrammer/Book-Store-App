export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const CHANGE_FILTER = "CHANGE_FILTER";

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const changeFilter = (books) => ({
  type: CHANGE_FILTER,
  payload: books,
});
