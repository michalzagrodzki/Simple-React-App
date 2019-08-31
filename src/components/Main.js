import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      message: {
        title: '',
        subtitle: ''
      },
      products: [],
      productAction: {
        button: ''
      },
      contact: {
        title: '',
        subtitle: '',
        button: ''
      },
      sections: {
        message: '',
        products: '',
        contact: ''
      },
      form: {
        name: '',
        email: '',
        message: ''
      },
      error: {
        message: ''
      },
      subimittedMessage: {
        name: '',
        email: '',
        message: ''
      }
    };

    this.postMessage = this.postMessage.bind(this);
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
          'error.message': error
        });
      });
  }

  postMessage () {
    if (this.state.form.name !== '' && this.state.form.email !== '' && this.state.form.message !== '') { 
      axios.post('api/contact',
      {
        name: this.state.form.name,
        email: this.state.form.email,
        message: this.state.form.message
      },
      {
        'Content-Type': 'application/json'
      })
      .then(response => {
        this.setState({
          'subimittedMessage.name': this.state.form.name,
          'subimittedMessage.email': this.state.form.email,
          'subimittedMessage.message': this.state.form.message,
        })
      },
      (error) => {
        this.setState({
          'error.message': error
        });
      });
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  componentWillUnmount() {

  }

  render() {
    const { products } = this.state;
    return (
	    <div className="Main">
	      <h1>Main Component</h1>
        { products.map(product => 
          <div key={product.id}>{product.name}</div>) 
        }
	    </div>
	  );
  }
}

export default Main;
