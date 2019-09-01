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

  postMessage () {
    if (this.state.form.name !== '' && this.state.form.email !== '' && this.state.form.message !== '') { 
      axios.post('api/contact',
      {
        name: this.state.form.name,
        email: this.state.form.email,
        message: this.state.form.message
      },
      { 
        cancelToken: this.source.token 
      },
      {
        'Content-Type': 'application/json'
      })
      .then(response => {
        this.setState({
          subimittedMessage: {
            name: this.state.form.name,
            email: this.state.form.email,
            message: this.state.form.message,
          }
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
  }

  componentDidMount() {
    this.getProducts();
    this.setState({
      title: 'Simple Vue App',
      message: {
        title: 'This is example app using vue.js',
        subtitle: 'this app shows capabilities of using vue in simple cases'
      },
      productAction: {
        button:'MORE PRODUCTS'
      },
      contact: {
        title: 'Take a contact with us',
        subtitle: 'We are working with different people on different projects',
        button: 'SEND MESSAGE'
      },
      sections: {
        message: 'VUE APP',
        products: 'Products',
        contact: 'Contact'
      }
    });
  }

  componentWillUnmount() {
    this.source.cancel("All operations cancelled.");
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
