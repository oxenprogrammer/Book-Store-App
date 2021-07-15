import { screen } from "@testing-library/react";

import BooksList from "../BooksList";
import { renderWithState } from "../../utils/testHelper";

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

describe("Book", () => {
  it("should have a BooksList", async () => {
    renderWithState(<BooksList />, { initialState });

    const bookTitle = await screen.findByText("The Big Boss");

    expect(bookTitle).toBeTruthy();
  });
});
