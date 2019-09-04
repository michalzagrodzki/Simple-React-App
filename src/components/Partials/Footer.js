import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      facebook: {
        name: '',
        value: ''
      },
      twitter: {
        name: '',
        value: ''
      },
      linkedin: {
        name: '',
        value: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      facebook: {
        name: 'Facebook',
        value: 'https://www.facebook.com/'
      },
      twitter: {
        name: 'Twitter',
        value: 'https://twitter.com/'
      },
      linkedin: {
        name: 'Linkedin',
        value: 'https://www.linkedin.com/'
      }
    });
  }

  render() {
    const { facebook, twitter, linkedin } = this.state;
    return (
      <div className="footer-section">
        <a href={ facebook.value }>{ facebook.name }</a>
        <a href={ twitter.value }>{ twitter.name }</a>
        <a href={ linkedin.value }>{ linkedin.name }</a>
      </div>
    );
  }
}

export default Footer;
