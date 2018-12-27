import * as React from "react";

export class FAQEvent extends React.Component {
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
