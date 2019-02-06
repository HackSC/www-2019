import React, { Component } from "react"

import bigDevEnergy from './assets/big_dev_energy.png'

import './styles/nights.scss'

class App extends Component {
	render() {
		return (
			<div className='container has-text-centered'>
        <img src={bigDevEnergy} className='big-dev-energy' alt='Big Dev energy'/>
        <p className='subtitle'>HackSC Presents</p>
        <h1>Hack Nights</h1>

        <h2 className='energy'>Big Dev Energy</h2>

        <h3>Ground Zero</h3>
        <h3>6:00 - 8:30 PM</h3>
        <h3>Every Wednesday.</h3>
			</div>
		);
	}
}

export default App
