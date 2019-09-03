import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

  getProducts () {
    axios.get('/assets/JSON/products.json', 
      { 
        cancelToken: this.source.token 
      })
      .then(response => {
        this.setState({
          products: response.data
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
    this.getProducts();
    this.setState({
      title: 'Products Portfolio',
      subtitle: 'Complete list of my products'
    });
  }

  componentWillUnmount() {
    this.source.cancel("All operations cancelled.");
  }

  render() {
    return (
      <div className="Main">
        <h1>Portfolio Component</h1>
      </div>
    );
  }
}

export default Portfolio;
