import { Book } from "../Book";
import { renderWithState } from "../../utils/testHelper";

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

describe("Book", () => {
  it("should have a Book", async () => {
    const book = renderWithState(<Book />, { initialState });
    expect(book).toBeTruthy();
  });
});
