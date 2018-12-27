import React, { Component } from "react";
import { Splash } from "./components/Splash";
import { FAQ } from "./components/FAQ";
import { Sponsors } from "./components/Sponsors";

import "./App.css";
import ReactGA from "react-ga";

class App extends Component {
	render() {
		return (
			<div>
				<Splash />
				<FAQ />
				<Sponsors />
			</div>
		);
	}
}

export default App;
