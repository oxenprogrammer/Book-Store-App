import { render } from "@testing-library/react";

import { Book } from "../Book";
import { createStore } from "redux";
import { reducer } from "../../reducers";
import { Provider } from "react-redux";

const initialState = {
  books: [
    {
      id: 1,
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
    const book = render(<Book />, { wrapper: Wrapper });
    expect(book).toBeTruthy();
  });
});
