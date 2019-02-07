import React from "react"

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import email from '../assets/envelope.png';

export default () => (
  <div>
    <p className="has-text-centered">
      Reach out to us at <a href="mailto:team@hacksc.com">team@hacksc.com</a> or on social media if you have any questions, want more information, or want to talk about sponsorship!
    </p>

    <p className="social-links">
      <a href="https://www.facebook.com/hackscofficial/" target="_blank"><img src={facebook} alt="Facebook" /></a>
      <a href="https://instagram.com/hackscofficial" target="_blank"><img src={instagram} alt="Instagram" /></a>
      <a href="mailto:team@hacksc.com" target="_blank"><img src={email} alt="Email" /></a>
    </p>
  </div>
)
