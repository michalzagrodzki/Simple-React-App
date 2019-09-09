import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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
    const currentRoute = parseInt(this.props.match.params.id, 10);
    const previousRoute = currentRoute - 1;
    if (previousRoute > 0) {
      this.props.history.push(previousRoute.toString());
    }
  }

  nextPage () {
    const currentRoute = parseInt(this.props.match.params.id, 10);
    const nextRoute = currentRoute + 1;
    const routeLimit = this.state.productsLength;
    if (nextRoute <= routeLimit) {
      console.log('redirecintg')
      this.props.history.push(nextRoute.toString());
    }
  }

  getProduct (vm, url) {
    axios.get(url,
      { 
        cancelToken: vm.source.token 
      })
      .then(response => {
        const idNumber = parseInt(vm.props.match.params.id, 10);
        const selectedItem = response.data.find((item) => {
          return item.id === idNumber
        });

        vm.setState({
          title: selectedItem.name,
          description: selectedItem.description,
          images: selectedItem.images,
          details: selectedItem.details
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

  getLimitedProducts (vm, url) {
    axios.get(url, 
      { 
        cancelToken: vm.source.token 
      })
      .then(response => {
        const productsLength = parseInt(response.data.length, 10)
        const slicedProducts = response.data.slice(0, 3)
        vm.setState({
          products: slicedProducts,
          productsLength: productsLength
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
    this.getProduct(this, '/assets/JSON/products.json');
    this.getLimitedProducts(this, '/assets/JSON/products.json');
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
