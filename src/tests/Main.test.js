import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Main from './../components/Main/Main';

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
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.head-section h1');
  expect(title.textContent).toBe('Simple React App');
});

it("renders with first section title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.subtitle-header h4');
  expect(title.textContent).toBe('REACT APP');
});

it("renders with main message title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.subtitle-body h2');
  expect(title.textContent).toBe('This is example app using react');
});

it("renders with main message sub-title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.subtitle-body h3');
  expect(title.textContent).toBe('this app shows capabilities of using react in simple cases');
});
