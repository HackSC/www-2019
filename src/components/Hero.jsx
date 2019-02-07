import '../styles/footer.scss'

import React from "react"

import logo from '../assets/hacksclogovertical.png';
import wireFlower from '../assets/wire-flower_white.svg';
import clickDown from '../assets/angle-down.svg';

import { Link } from 'react-scroll';

import '../styles/hero.scss'

export default (props) => (
  <header>
    <div className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half has-text-centered">
              <img src={wireFlower} className="logo" alt="HackSC Logo" />
            </div>

            <div className="column is-half details-column">
              <h1 className="title">HackSC</h1>
              <h2 className="title">April 12-14, 2019</h2>
              <h2 className="title">Los Angeles, CA</h2>
              <p className="subtitle">Hackathon, but we do it better.<br/>Hosted by USC, baby.</p>

              <button className="button is-primary is-medium apply-button">Applications Opening Feb 10</button>
            </div>
          </div>
        </div>
      </div>

      <Link
        to='main'
        smooth={true}
        duration={1000}
      >
        <img className="click-down" src={clickDown} alt="Click to Scroll" />
      </Link>
    </div>
  </header>
)
