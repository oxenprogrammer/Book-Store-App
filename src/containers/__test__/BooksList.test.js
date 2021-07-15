import { render, screen } from "@testing-library/react";

import BooksList from "../BooksList";
import { createStore } from "redux";
import { reducer } from "../../reducers";
import { Provider } from "react-redux";

const initialState = {
  books: [
    {
      id: 2,
      title: "Enter the Dragon",
      category: "Action",
      author: "Emanuel Okello",
      read: 64,
    },
    {
      id: 3,
      title: "Eastern Condors",
      category: "History",
      author: "Naava Gladys",
      read: 46,
    },
    {
      id: 4,
      title: "The Big Boss",
      category: "Action",
      author: "Angelina Alycia",
      read: 95,
    },
  ],
};

const store = createStore(reducer, initialState);

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("Book", () => {
  it("should have a Book", async () => {
    render(<BooksList />, { wrapper: Wrapper });

    const bookTitle = await screen.findByText("The Big Boss");

    expect(bookTitle).toBeTruthy();
  });
});
