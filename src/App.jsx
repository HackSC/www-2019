import React, { Component } from "react"

import './styles/section.scss'
import './styles/hero.scss'

class App extends Component {
	render() {
		return (
			<div>
        <header>
          <div className="hero is-primary is-fullheight">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">April 12-14, 2019. <br/> Los Angeles, CA.</h1>
                <p className="subtitle">Hack, build, and innovate. <br/> Coming soon to Southern California.</p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="section">
            <div className="container">
              <h2 className="title">Details.</h2>

              <div className="columns">
                <div className="column is-three-fifths">
                  <p>Welcome to Los Angeles, the warm and beautiful city of angels and dreamers. On the University of Southern California campus this spring, you are invited to a 36 hour technology hackathon that seeks to change the future of our beloved city. Alongside 700+ hackers and designers, you will re-imagine what a 21st century city should look like and apply your ideas to the test.</p>

                  <br/>

                <p>We hope you will join us.</p>
                </div>

                <div className="column">
                  <p>
                    <b>Location</b><br/>
                    University of Southern California<br/>
                    Los Angeles, CA 90007
                  </p>

                  <br/>

                  <p>
                    <b>Start</b><br/>
                    Friday, April 12th, 10PM
                  </p>

                  <br/>

                  <p>
                    <b>End</b><br/>
                    Sunday, April 14th, 10AM
                  </p>

                  <br/>

                  <p>
                    <b>Cost</b><br/>
                    Totally free.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section right">
            <div className="container">
              <h2 className="title">FAQ.</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h2 className="title">Sponsors.</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </section>

          <section className="section right">
            <div className="container">
              <h2 className="title">Contact.</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </section>
        </main>

        <footer className="footer has-text-centered">
          <p>&copy; HackSC 2019</p>
        </footer>
			</div>
		);
	}
}

export default App
