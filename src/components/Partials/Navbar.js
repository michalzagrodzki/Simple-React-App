import React from 'react';
import { Link } from 'react-router-dom'

import "./navbar.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      home: {
        name: '',
        value: ''
      },
      portfolio: {
        name: '',
        value: ''
      },
      contact: {
        name: '',
        value: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      home: {
        name: 'Home',
        value: 'main'
      },
      portfolio: {
        name: 'Portfolio',
        value: 'portfolio'
      },
      contact: {
        name: 'Contact',
        value: 'contact'
      }
    });
  }

  render() {
    const { home, portfolio, contact } = this.state;
    return (
      <div className="navbar-section">
        <Link to={'/'}>
          <p>{ home.name }</p>  
        </Link>
        <Link to={'/portfolio'}>
          <p>{ portfolio.name }</p>  
        </Link>
        <Link to={'/contact'}>
          <p>{ contact.name }</p>  
        </Link>
      </div>
    );
  }
}

export default Navbar;
