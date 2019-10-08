import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { shallow } from 'enzyme';
import { act } from "react-dom/test-utils";
import axiosMock from "axios";
import { getProduct, getLimitedProducts } from './../services/api'

import Item from './../components/Item/Item';

configure({ adapter: new Adapter() });

describe('<Item />', () => {
  jest.mock('axios', () => {
    const fakeProduct = {
      title: 'Product 1',
      description: 'Description of product',
      images: [],
      details: {
        client: 'Client 1',
        services: 'Service 1',
        year: '1900',
        link: 'https://'
      }
    }
    
    return {
      get: jest.fn(() => Promise.resolve(fakeProduct)),
    };
  });

  const axios = require('axios');

  it("renders user data", async () => {

    const wrapper = shallow(
      <MemoryRouter>
        <Item id="1" />
      </MemoryRouter>
    );
    wrapper.instance().componentDidMount();
    await Promise.resolve();

    console.log(wrapper.instance().props.children.props);

  });

})
