import { ADD_BOOK, REMOVE_BOOK } from "../actions";

export const books = (state = [], action) => {
  const book = {
    bookId:Math.floor(Math.random() * 1000),
    read: "No",
  }
  switch (action.type) {
    case ADD_BOOK:{
      let {id, title, pages, read, category } = action.payload;
      id = book.bookId;
      read = book.read;
      return [...state, {id, read, title, pages, category}];
    }
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
