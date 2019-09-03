import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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
  }

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();

  getProduct () {
    axios.get('/assets/JSON/products.json', 
      { 
        cancelToken: this.source.token 
      })
      .then(response => {
        const idNumber = parseInt(this.props.match.params.id, 10);
        const selectedItem = response.data.find((item) => {
          return item.id === idNumber
        });

        this.setState({
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
          this.setState({
            error: {
              message: error 
            }
          });
        }
      });
  }

  getLimitedProducts () {
    axios.get('/assets/JSON/products.json', 
      { 
        cancelToken: this.source.token 
      })
      .then(response => {
        const productsLength = parseInt(response.data.length, 10)
        const slicedProducts = response.data.slice(0, 3)
        this.setState({
          products: slicedProducts,
          productsLength: productsLength
        })
      },
      (error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled: ' + error.message);
        } else {
          this.setState({
            error: {
              message: error 
            }
          });
        }
      });
  }

  componentDidMount() {
    this.getProduct();
    this.getLimitedProducts();
  }

  componentWillUnmount() {
    this.source.cancel("All operations cancelled.");
  }

  render() {
    return (
      <div className="Item">
        <h1>Item Component</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Item;
