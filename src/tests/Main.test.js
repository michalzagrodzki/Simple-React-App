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

it("renders with second section title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.product-header h4');
  expect(title.textContent).toBe('Products');
});

it("renders with third section title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-header h4');
  expect(title.textContent).toBe('Contact');
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

it("renders with product action button text", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const button = container.querySelector('.products-footer button');
  expect(button.textContent).toBe('MORE PRODUCTS');
});

it("renders with contact title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-section h2');
  expect(title.textContent).toBe('Take a contact with us');
});

it("renders with contact sub title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-section h3');
  expect(title.textContent).toBe('We are working with different people on different projects');
});

it("renders with contact submit button", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-section form button');
  expect(title.textContent).toBe('SEND MESSAGE');
});
