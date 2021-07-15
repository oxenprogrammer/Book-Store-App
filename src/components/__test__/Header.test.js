import Header from "../Header";
import { unmountComponentAtNode } from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import { renderWithState } from "../../utils/testHelper";

describe("Header Component", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render the Navbar", () => {
    act(() => {
      renderWithState(<Header />, container);
    });
    expect(container).toBeDefined();
  });
});
