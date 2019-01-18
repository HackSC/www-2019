import React, { Component } from "react"

import './styles/section.scss'
import './styles/hero.scss'
import logo from './assets/hacksclogovertical.png';

class App extends Component {
	render() {
		return (
			<div>
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
          </div>
        </header>

        <main>
          <section className="section">
            <div className="container">
              <h2 className="title details">Details.</h2>

              <div className="columns">
                <div className="column is-three-fifths">
                  <p><em>Welcome to Los Angeles, the warm and beautiful city of angels and dreamers. On the University of Southern California campus this spring, you are invited to a 36 hour technology hackathon that seeks to change the future of our beloved city. Alongside 700+ hackers and designers, you will re-imagine what a 21st century city should look like and apply your ideas to the test.</em></p>

                  <br/>

                <p>We hope you will join us!</p>
                </div>

                <div className="column">
                  <p>
                    <b>Location</b><br/>
                    <em>University of Southern California<br/>
                    Los Angeles, CA 90007</em>
                  </p>

                  <br/>

                  <p>
                    <b>Start</b><br/>
                    <em>Friday, April 12th, 10PM</em>
                  </p>

                  <br/>

                  <p>
                    <b>End</b><br/>
                    <em>Sunday, April 14th, 10AM</em>
                  </p>

                  <br/>

                  <p>
                    <b>Cost</b><br/>
                    <em>Totally free.</em>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section right faq">
            <div className="container">
              <h2 className="title faq">FAQ.</h2>
              <div className="columns">
                <div className="column">
                  <div className="question">
                    <h3>Why HackSC?</h3>
                    <p>{"HackSC is a very different hackathon in that we aim to break the mold -- for us, this means pushing the boundaries of creation past just app development and tech. We're taking a very interdisciplinary approach, admitting people with skills not just in Computer Science, but also in design, product, and more."}</p>
                  </div>

                  <div className="question">
                    <h3>Who can attend?</h3>
                    <p>{"Any college student, undergraduate or graduate, can apply! Regardless of your major, experience, or any other factor, we invite you to apply to HackSC."}</p>
                  </div>

                  <div className="question">
                    <h3>Are there travel reimbursements?</h3>
                    <p>{"Hope you like bus rides! We are sending buses up to the Bay and down to San Diego. Details to be finalized."}</p>
                  </div>

                  <div className="question">
                    <h3>What if my question isn't here?</h3>
                    <p>{"You can message and/or email us your questions! Feel free to reach out to us at team@hacksc.com or on social media!"}</p>
                  </div>
                </div>

                <div className="column">
                  <div className="question">
                    <h3>What should I bring?</h3>
                    <p>{"All hackers must bring their valid student ID for admission (the name must match your HackSC application). Definitely bring your laptop, charger, and any hackathon gear you need for your creation. We also strongly recommend bringing a sleeping bag and toiletries for when you need to rest and washup."}</p>
                  </div>

                  <div className="question">
                    <h3>Does it cost anything?</h3>
                    <p>{"Nope! Admission is free for all hackers. This includes food and drinks! The only thing you have to figure out is transportation."}</p>
                  </div>

                  <div className="question">
                    <h3>How do teams work?</h3>
                    <p>{"HackSC allows teams up to 4 people. If you don't have a team prior to the hackathon, that's 100% OK; we will have plenty of team-matching events for you to find the perfect group! You can also work alone, if that floats your boat."}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h2 className="title sponsors">Sponsors.</h2>
              <p class="coming-soon">TBA.<br/>Coming Soon.</p>
            </div>
          </section>

          <section className="section right">
            <div className="container">
              <h2 className="title contact">Contact.</h2>
              <p className="has-text-centered">
                Reach out to us at <a href="mailto:team@hacksc.com">team@hacksc.com</a> or on social media if you have any questions, want more information, or want to talk about sponsorship!
              </p>
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
