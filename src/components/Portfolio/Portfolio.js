import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

  getProducts (vm, url) {
    axios.get(url, 
      { 
        cancelToken: vm.source.token 
      })
      .then(response => {
        vm.setState({
          products: response.data
        })
      },
      (error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled: ' + error.message);
        } else {
          vm.setState({
            error: {
              message: error 
            }
          });
        }
      });
  }

  componentDidMount() {
    this.getProducts(this, '/assets/JSON/products.json');
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
