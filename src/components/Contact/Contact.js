import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      caption: {
        subtitle: '',
        text: ''
      },
      formName: '',
      formEmail: '',
      formMessage: '',
      submitText: '',
      contact: {
        title: '',
        description: '',
        street: '',
        city: '',
        postcode: '',
        email: '',
        phone: ''
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
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();

  postMessage (event) {
    event.preventDefault();
    if (this.state.formName !== '' && this.state.formEmail !== '' && this.state.formMessage !== '') {
      axios.post('api/contact',
      {
        name: this.state.formName,
        email: this.state.formEmaill,
        message: this.state.formMessage
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
            name: this.state.formName,
            email: this.state.formEmail,
            message: this.state.formMessage,
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

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    this.setState({
      title: `Let's talk.`,
      caption: {
        subtitle: 'We are located in Lower Downtown of your city.',
        text: 'Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression.'
      },
      submitText: 'Send question',
      contact: {
        title: 'Office',
        description: 'Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two',
        street: '219 E 4th St',
        city: 'New York',
        postcode: '10001',
        email: 'your@email.com',
        phone: '+88 (0) 101 0000 000'
      }
    });
  }

  componentWillUnmount() {
    this.source.cancel("All operations cancelled.");
  }

  render() {
    const { title, caption, submitText, contact, formName, formEmail, formMessage } = this.state;
    return (
	    <div className="Contact">
	      <section>
          <div className="contact-head-section">
            <h1>{ title }</h1>
          </div>
        </section>
        <section>
          <div className="contact-form-section">
            <h2>{ caption.subtitle }</h2>
            <h4>{ caption.text }</h4>
            <form onSubmit={ this.postMessage }>
              <input name="formName" type="text" value={formName} onChange={this.handleFormChange} placeholder="your name" />
              <input name="formEmail" type="text" value={formEmail} onChange={this.handleFormChange} placeholder="your email" />
              <input name="formMessage" type="text" value={formMessage} onChange={this.handleFormChange} placeholder="your message" />
              <button type="submit" value="Submit">{ submitText }</button>
            </form>
          </div>
        </section>
        <section>
          <div className="contact-address-section">
            <h2>{ contact.title }</h2>
            <h4>{ contact.description }</h4>
            <p>{ contact.street }</p>
            <p>{ contact.city }</p>
            <p>{ contact.postcode }</p>
            <div className="contact-details">
              <em>Email:</em>
              <p>{ contact.email }</p>
              <em>Phone:</em>
              <p>{ contact.phone }</p>
            </div>
          </div>
        </section>
	    </div>
	  );
  }
}

export default Contact;

