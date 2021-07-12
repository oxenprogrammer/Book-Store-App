import { ADD_BOOK, REMOVE_BOOK } from "../actions";

const randomId = () => Math.floor(Math.random() * 1000);

export const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: randomId(),
          title: action.Book.title,
          category: action.Book.category,
          pages: action.Book.pages,
          read: action.Book.read,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
