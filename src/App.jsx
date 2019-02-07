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
                <h2 className="title details">Details</h2>

                <div className="columns">
                  <div className="column is-three-fifths">
                    <p>
                      HackSC is a better hackathon than the one you’re thinking of right now, let’s tell you why.
                      Located in the heart of sunny, seductive Los Angeles, HackSC will provide a weekend full of innovation, connection, and education.
                      In an interdisciplinary endeavor, join together with 1000+ hackers, designers, and visionaries to engage in workshops, listen to speakers,
                      and develop programs, tools, and relationships that can last for life. Coming from USC, HackSC seeks to breathe some of Southern California’s
                      life and culture into the field and world of tech.

                      We hope to have you join us!

                      For more information and updates, feel free to sign up for our newsletter,
                      or read our Medium blog at <a href="https://medium.com/@hacksc_">{'https://medium.com/@hacksc'}</a>
                    </p>
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
                      <em>Not a thing</em>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Section title="FAQ" sectionClass="faq">
              <FAQ />
            </Section>

            <Section title="Sponsors" sectionClass="sponsors">
              <p className="coming-soon">TBA.<br/>Coming Soon.</p>
            </Section>

            <Section title="Contact" sectionClass="contact">
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
