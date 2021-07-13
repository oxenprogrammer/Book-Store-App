export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

export const addBook = (Book) => ({ type: ADD_BOOK, payload: Book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
