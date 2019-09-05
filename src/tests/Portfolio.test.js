import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Portfolio from './../components/Portfolio/Portfolio';

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

it("renders with title", () => {
  act(() => {
    render(<Portfolio />, container);
  });
  const title = container.querySelector('.portfolio-head-section h1');
  expect(title.textContent).toBe('Products Portfolio');
});

it("renders with sub title", () => {
  act(() => {
    render(<Portfolio />, container);
  });
  const title = container.querySelector('.portfolio-head-section h2');
  expect(title.textContent).toBe('Complete list of my products');
});
