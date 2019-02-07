import '../styles/footer.scss'

import React from "react"

import logo from '../assets/hacksclogovertical.png';
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
              <img src={logo} className="logo" alt="HackSC Logo" />
            </div>

            <div className="column is-half has-text-right">
              <h1 className="title">HackSC. <br/>April 12-14, 2019. <br/>Los Angeles, CA.</h1>
              <p className="subtitle">Hack, build, and innovate. <br/> Hackathon coming soon to USC.</p>

              <button>Apps Open: Feb 10, 2019</button>
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
