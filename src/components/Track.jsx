import * as React from "react";

export class Track extends React.Component {
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
