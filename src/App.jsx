import React, { Component } from "react"

import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

// Click to Scroll
import * as Scroll from 'react-scroll'

class App extends Component {
	render() {
		return (
			<div>
        <Hero />

        <Scroll.Element name="main">
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

            <Section title="FAQ." sectionClass="faq">
              <FAQ />
            </Section>

            <Section title="Sponsors." sectionClass="sponsors">
              <p className="coming-soon">TBA.<br/>Coming Soon.</p>
            </Section>

            <Section title="Contact." sectionClass="contact">
              <Contact />
            </Section>
          </main>
        </Scroll.Element>

        <Footer />
			</div>
		);
	}
}

export default App
