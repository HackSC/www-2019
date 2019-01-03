import * as React from "react";
import { SignUp } from "./SignUp";
import FadeIn from "react-fade-in";

export class Splash extends React.Component {
	render() {
		return (
			<div className="splash">
				{/* <FadeIn> */}
				<div className="splash-top">
					<div className="splash-logo-container">
						<div className="splash-logo" />
						<button
							onClick={() => (window.location.href = "/apply")}
							type="button"
							className="btn btn--secondary uppercase">
							Interested in organizing? <br />
							(Click Here)
						</button>
					</div>
					<div className="splash-content">
						<h3>
							Welcome to Los Angeles, the warm and beautiful city of angels and
							dreamers. On the University of Southern California campus this
							spring, you are invited to a 36 hour technology hackathon that
							seeks to change the future of our beloved city. Alongside 700+
							hackers and designers, you will re-imagine what a 21st century
							city should look like and apply your ideas to the test.
							<br />
							<br />
							We hope you will join us.
							<br />
							<br />
							—HackSC Team
							<br />
							<br />
						</h3>
						<SignUp />
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
							Friday, April 12th, 10PM
							<br />
							<br />
							END:
							<br />
							Sunday, April 14th, 10AM
							<br />
						</h3>
					</div>
				</div>
				{/* </FadeIn> */}
				<div className="la-sky" />
				<div className="la-moon" />
			</div>
		);
	}
}
