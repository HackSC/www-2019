import * as React from "react";
import { FAQEvent } from "./FAQEvent";

export class FAQ extends React.Component {
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
          creation. We also strongly recommend bringing a sleeping bag and toiletries for when you need to rest and washup."
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
