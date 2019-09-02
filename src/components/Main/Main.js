import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import "./main.scss";

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
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
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

  handleName(event) {
    this.setState({
      form: {
        name: event.target.value
      }
    });
  }

  handleEmail(event) {
    this.setState({
      form: {
        email: event.target.value
      }
    });
  }

  handleMessage(event) {
    this.setState({
      form: {
        message: event.target.value
      }
    });
  }

  componentDidMount() {
    this.getProducts();
    this.setState({
      title: 'Simple React App',
      message: {
        title: 'This is example app using react',
        subtitle: 'this app shows capabilities of using react in simple cases'
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
        message: 'REACT APP',
        products: 'Products',
        contact: 'Contact'
      }
    });
  }

  componentWillUnmount() {
    this.source.cancel("All operations cancelled.");
  }

  render() {
    const { title, sections, message, products, productAction, contact, form } = this.state;
    return (
	    <div className="Main">
        <section>
          <div className="head-section">
            <h1>{ title }</h1>
          </div>
        </section>
        <section>
        <div className="message-section">
          <div className="subtitle-field">
            <div className="subtitle-header">
              <h4>{ sections.message }</h4>
            </div>
            <div className="subtitle-body">
              <h2>{ message.title }</h2>
              <h3>{ message.subtitle }</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="products-section">
          <div className="product-field">
            <div className="product-header">
              <h4>{ sections.products }</h4>
            </div>
          </div>
        </div>
        <div className="products-row">
          { 
            products.map(product => 
              <Link key={product.id} to={`/item/${product.id}`} className="product-item">
                  <img src={product.coverImage} alt=""/>
                  <div className="overlay">
                    <p>{product.name}</p>
                  </div>
              </Link>
            )
          }
        </div>
        <div className="products-footer">
          <Link to="/portfolio">
            <button>{ productAction.button }</button>
          </Link>
        </div>
      </section>
      <section>
        <div className="contact-section">
          <div className="contact-header">
            <h4>{ sections.contact }</h4>
          </div>
          <h2>{ contact.title }</h2>
          <h3>{ contact.subtitle }</h3>
          <form>
            <input type="text" value={form.name} onChange={this.handleName} placeholder="your name" />
            <input type="text" value={form.email} onChange={this.handleEmail} placeholder="your email" />
            <input type="text" value={form.message} onChange={this.handleMessage} placeholder="your message" />
            <button onClick={postMessage}>{ contact.button }</button>
          </form>
        </div>
      </section>
        
	    </div>
	  );
  }
}

export default Main;
