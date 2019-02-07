import React from "react"

import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import medium from '../assets/social/medium.svg';
import instagram from '../assets/social/instagram.svg';
import email from '../assets/social/email.svg';

export default () => (
  <div>
    <p className="has-text-centered">
      Reach out to us at <a href="mailto:team@hacksc.com">team@hacksc.com</a> or on social media if you have any questions, want more information, or want to talk about sponsorship!
    </p>

    <p className="social-links">
      <a href="https://www.facebook.com/hackscofficial/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a>
      <a href="https://instagram.com/hackscofficial" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
      <a href="https://twitter.com/hackscofficial" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
      <a href="https://medium.com/@hacksc" target="_blank" rel="noopener noreferrer"><img src={medium} alt="Medium" /></a>
      <a href="mailto:team@hacksc.com"><img src={email} alt="Email" /></a>
    </p>
  </div>
)
