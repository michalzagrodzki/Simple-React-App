import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import Contact from './../components/Contact/Contact';

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
        <Contact />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-head-section h1');
  expect(title.textContent).toBe(`Let's talk.`);
});

it("renders with caption subtitle", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-form-section h2');
  expect(title.textContent).toBe('We are located in Lower Downtown of your city.');
});

it("renders with caption text", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-form-section h4');
  expect(title.textContent).toBe('Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression.');
});

it("renders with contact title", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>, 
      container
    );
  });
  const title = container.querySelector('.contact-address-section h2');
  expect(title.textContent).toBe('Office');
});
