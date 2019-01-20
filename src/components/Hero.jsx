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
            <div className="column">
              <img src={logo} />
            </div>

            <div className="column has-text-right">
              <h1 className="title">April 12-14, 2019. <br/> Los Angeles, CA.</h1>
              <p className="subtitle">Hack, build, and innovate. <br/> Coming soon to Southern California.</p>

                <div className="field has-addons subscribe-form">
                  <div className="control email-control">
                    <input className="input is-medium" type="email" placeholder="your@email.com"/>
                  </div>
                  <div className="control">
                    <a className="button is-medium is-primary">
                      Subscribe
                    </a>
                  </div>
                </div>
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
