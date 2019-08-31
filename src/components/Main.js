import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      error: ''
    };
  }

  getProducts () {
    axios.get('/assets/JSON/products.json')
      .then(response => {
        this.setState({
          products: response.data
        })
      },
      (error) => {
        this.setState({
          error: error
        });
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  componentWillUnmount() {

  }

  render() {
    return (
	    <div className="Main">
	      <h1>Main Component</h1>
        { this.state.products.map(product => 
          <div key={product.id}>{product.name}</div>) 
        }
	    </div>
	  );
  }
}

export default Main;
