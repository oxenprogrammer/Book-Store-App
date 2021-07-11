import { ADD_BOOK, REMOVE_BOOK } from "../actions";

const randomId = () => Math.floor(Math.random() * 1000);
const initialState = [
  {
    id: randomId,
    title: "Enter the Dragon",
    category: "Action",
    pages: 34,
    read: false,
  },
  {
    id: randomId,
    title: "Eastern Condors",
    category: "History",
    pages: 74,
    read: false,
  },
  {
    id: randomId,
    title: "The Big Boss",
    category: "Action",
    pages: 84,
    read: true,
  },
];

export const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: randomId(),
          title: action.Book.title,
          category: action.Book.category,
          pages: action.Book.pages,
          read: action.Book.read
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
