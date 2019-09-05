import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Footer from './../components/Partials/Footer';

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

it("renders with facebook link", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
      container
    );
  });
  const title = container.querySelector('.footer-section a');
  expect(title.textContent).toBe('Facebook');
});
