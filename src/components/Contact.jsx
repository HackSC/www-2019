import React from 'react';

import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import medium from '../assets/social/medium.svg';
import instagram from '../assets/social/instagram.svg';
import email from '../assets/social/email.svg';

import Modal from './TeamModal';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  showModal = () => {
    this.setState({
      showModal: true,
    });

    // Prevent window from scrolling while modal is active
    document.querySelector('html').classList.add('no-scroll');
  };

  hideModal = () => {
    this.setState({
      showModal: false,
    });

    // Allow window to scroll now that modal isn't active
    document.querySelector('html').classList.remove('no-scroll');
  };

  render() {
    return (
      <div>
        <p className="has-text-centered">
          Reach out to us at{' '}
          <a href="mailto:hackers@hacksc.com">hackers@hacksc.com</a> or on
          social media if you have any questions, want more information, or want
          to talk about sponsorship!
          <br />
          <button
            className="button is-medium meet-team-button"
            onClick={this.showModal}
          >
            Meet Our Team
          </button>
        </p>

        <p className="social-links">
          <a
            href="https://www.facebook.com/hackscofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://instagram.com/hackscofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/hackscofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://medium.com/@hacksc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="Medium" />
          </a>
          <a href="mailto:hackers@hacksc.com">
            <img src={email} alt="Email" />
          </a>
        </p>

        <Modal isActive={this.state.showModal} hideModal={this.hideModal} />
      </div>
    );
  }
}

export default Contact;
