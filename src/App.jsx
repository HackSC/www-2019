import React, { Component } from "react"

import "./App.css"

class App extends Component {
	render() {
		return (
			<div>
        <header>
          <div>
            <h1>April 12-14, 2019. <br/> Los Angeles, CA.</h1>
            <p>Hack, build, and innovate. <br/> Coming soon to Southern California.</p>
          </div>
        </header>

        <main>
          <section>
            <h2>Details</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </section>

          <section>
            <h2>FAQ</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </section>

          <section>
            <h2>Sponsors</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </section>
        </main>

        <footer>
          <p>&copy; HackSC 2019</p>
        </footer>
			</div>
		);
	}
}

export default App
