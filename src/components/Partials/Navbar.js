import React from 'react';
import { Link } from 'react-router-dom'

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
    const { links } = this.state;
    return (
      <div className="Navbar">
        <section>
          <div className="">
            <h1>Navbar</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
