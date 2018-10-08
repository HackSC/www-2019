import React, { Component } from "react";
import google from "./assets/google.png";
import microsoft from "./assets/microsoft.png";
import esri from "./assets/esri.png";
import heal from "./assets/heal.png";
import ticketmaster from "./assets/ticketmaster.png";
import mlh from "./assets/mlh.png";
import "./App.css";
import FadeIn from "react-fade-in";

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

class Splash extends Component {
	render() {
		return (
			<div className="splash">
				<FadeIn>
					<div className="splash-logo" />
					<div className="splash-content">
						<h3>
							Welcome to Los Angeles, the warm and beautiful city of angels and
							dreamers. On the University of Southern California campus this
							fall, you are invited to a 36 hour technology hackathon that seeks
							to change the future of our beloved city. Alongside 600+ hackers
							and designers, you will re-imagine what a 21st century city should
							look like and apply your ideas to the test.
							<br />
							<br />
							We hope you will join us.
							<br />
							<br />
							—HackSC Team
							<br />
							<br />
						</h3>
						<a href="mailto:team@hacksc.com?subject=Interested in Getting Involved with HackSC">
							<button type="button" className="apply">
								SPONSOR
							</button>
						</a>
						<h3>
							<br />
							LOCATION:
							<br />
							University of Southern California
							<br />
							Los Angeles, CA 90007
							<br />
							<br />
							START:
							<br />
							Friday, April 19th, 10PM
							<br />
							<br />
							END:
							<br />
							Sunday, April 21st, 10AM
							<br />
						</h3>
					</div>
				</FadeIn>
				<div className="la-sky" />
				<div className="la-moon" />
			</div>
		);
	}
}

class Schedule extends Component {
	render() {
		return (
			<div className="schedule">
				<h1>Schedule here. CSS not yet implemented.</h1>
				<h3>Placeholder text.</h3>
			</div>
		);
	}
}

class Event extends Component {}

class FAQ extends Component {
	render() {
		return (
			<div className="faq-container">
				<div className="la-sky-reverse" />
				<div className="row">
					<h1 className="faq-header">FAQ</h1>
				</div>
				<div className="row">
					<FAQEvent
						question="Why HackSC?"
						answer="HackSC is a very different hackathon in that we
          aim to break the mold -- for us, this means pushing the boundaries
          of creation past just app development and tech. We're taking a very interdisciplinary approach,
          admitting people with skills not just in Computer Science, but also in design, product, and more."
					/>
					<FAQEvent
						question="What should I bring?"
						answer="All hackers must bring their valid student ID for admission (the
          name must match your HackSC application). Definitely bring your laptop, charger, and any hackathon gear you need for your
          creation. We also strongly recommend bringing a sleeping back and toiletries for when you need to rest and washup."
					/>
					<FAQEvent
						question="Who can attend?"
						answer="Any college student, undergraduate or graduate, can apply!
          Regardless of your major, experience, or any other factor, we invite you to apply to HackSC."
					/>
					<FAQEvent
						question="Does it cost anything?"
						answer="Nope! Admission is free for all hackers. This includes
          food and drinks! The only thing you have to figure out is transportation."
					/>
					<FAQEvent
						question="How do teams work?"
						answer="HackSC allows teams up to 4 people. If you don't have a team prior to the hackathon,
          that's 100% OK; we will have plenty of team-matching events for you to find the perfect group! You can also work alone,
          if that floats your boat."
					/>
					<FAQEvent
						question="What if my question isn't here?"
						answer="You can message and/or email us your questions! Feel free
          to reach out to us at team@hacksc.com or on social media!"
					/>
					<FAQEvent
						question="Travel Reimbursements?"
						answer="Hope you like bus rides! We are sending buses up to the Bay and down to San Diego. Details to be finalized."
					/>
				</div>
			</div>
		);
	}
}

class FAQEvent extends Component {
	render() {
		return (
			<div className="faq-event col-5">
				<h1
					style={{
						color: "yellow"
					}}>
					{this.props.question}
				</h1>
				<br />
				<br />
				<h1>{this.props.answer}</h1>
			</div>
		);
	}
}

class Track extends Component {
	render() {
		return (
			<div
				style={{
					color: this.props.textcolor,
					backgroundColor: this.props.bgcolor
				}}
				className={["track", this.props.column].join(" ")}>
				<h1>{this.props.text}</h1>
				<p>
					I don't know what to put here so this is Filler text. I don't know
					what to put here so this is Filler text. I don't know what to put here
					so this is Filler text. I don't know what to put here so this is
					Filler text. I don't know what to put here so this is Filler text.
				</p>
			</div>
		);
	}
}

class Sponsors extends Component {
	render() {
		return (
			<div className="sponsors">
				<div className="row">
					<h1>SPONSORS</h1>
				</div>
				<div className="row">
					<h2>TO BE ANNOUNCED</h2>
				</div>
			</div>
		);
	}
}

export default App;
