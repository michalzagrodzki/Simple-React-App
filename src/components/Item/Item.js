import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { getProduct, getLimitedProducts } from './../../services/api'
import { previousPage, nextPage } from './../../helpers/navigation'

import "./item.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      images: [],
      details: {
        client: '',
        services: '',
        year: '',
        link: ''
      },
      products: [],
      productsLength: Number,
      error: {
        message: ''
      }
    };

    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();

  previousPage () {
    previousPage(this);
  }

  nextPage () {
    nextPage(this);
  }

  componentDidMount() {
    getProduct(this, '/assets/JSON/products.json');
    getLimitedProducts(this, '/assets/JSON/products.json');
  }

  componentWillUnmount() {
    this.source.cancel("All operations cancelled.");
  }

  render() {
    const { images, title, description, details, products } = this.state;
    return (
      <div className="Item">
        <section>
          <div className="item-container">
            <div className="item-images-column">
              {
                images.map(image => 
                  <div key={image.link} className="item-image-item">
                    <img src={image.link} alt=""/>
                    <p>{ image.description }</p>
                  </div>
                )
              }
            </div>
            <div className="item-description-column">
              <h1>{ title }</h1>
              <p>{ description }</p>
              <div className="item-details">
                <em>Client</em>
                <p>{ details.client }</p>
                <em>Services</em>
                <p>{ details.services }</p>
                <em>Year</em>
                <p>{ details.year }</p>
                <em>Link</em>
                <p>{ details.link }</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="item-portfolio-section">
            <div className="item-portfolio-header">
              <h4>My works</h4>
            </div>

            <div className="item-portfolio-list">
              { 
                products.map(product => 
                  <Link key={product.id} to={`/item/${product.id}`} className="item-portfolio-product">
                    <img src={product.coverImage} alt=""/>
                    <p>{ product.name }</p>
                  </Link>
                )
              }
            </div>
          </div>
        </section>
        <section>
          <div className="item-navigation-section">
            <h4 onClick={this.previousPage}>&#60; Prev</h4>
            <Link to={`/portfolio`}>
              <h4>Portfolio</h4>
            </Link>
            <h4 onClick={this.nextPage}>Next &#62;</h4>
          </div>
        </section>
      </div>
    );
  }
}

export default Item;
