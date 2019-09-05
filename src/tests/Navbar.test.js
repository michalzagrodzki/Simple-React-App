import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Navbar from './../components/Partials/Navbar';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with home link", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      container
    );
  });
  const title = container.querySelector('.navbar-section a p');
  expect(title.textContent).toBe('Home');
});
