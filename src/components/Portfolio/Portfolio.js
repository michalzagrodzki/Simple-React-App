import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { getProducts } from './../../services/api'

import "./portfolio.scss";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      products: [],
      error: {
        message: ''
      }
    };
  }

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();

  componentDidMount() {
    getProducts(this, '/assets/JSON/products.json');
    this.setState({
      title: 'Products Portfolio',
      subtitle: 'Complete list of my products'
    });
  }

  componentWillUnmount() {
    this.source.cancel("All operations cancelled.");
  }

  render() {
    const { title, subtitle, products } = this.state;
    return (
      <div className="Portfolio">
        <section>
          <div className="portfolio-head-section">
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
          </div>
        </section>
        <section>
          <div className="portfolio-grid-section">
            <div className="portfolio-grid-header"></div>
            { 
              products.map(product => 
                <Link key={product.id} to={`/item/${product.id}`} className="portfolio-product-item">
                  <img src={product.coverImage} alt=""/>
                  <p>{ product.name }</p>
                </Link>
              )
            }
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
