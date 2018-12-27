import * as React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export class SignUp extends React.Component {
	url =
		"https://hacksc.us19.list-manage.com/subscribe/post?u=f19216c3aa5a09e620d5b8828&amp;id=3297e6b578";
	render() {
		return (
			<MailchimpSubscribe
				url={this.url}
				render={({ subscribe, status, message }) => (
					<CustomFormClean
						status={status}
						message={message}
						onValidated={formData => subscribe(formData)}
					/>
				)}
			/>
		);
	}
}

class CustomFormClean extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ""
		};
	}
	onSubmit = () => {
		let { email } = this.state;
		return (
			email &&
			email.indexOf("@") > -1 &&
			this.props.onValidated({
				EMAIL: email
			})
		);
	};
	onFormSubmit = e => {
		e.preventDefault();
		this.onSubmit();
	};
	componentWillReceiveProps(prevProps, nextProps) {
		if (prevProps.status != nextProps.status && prevProps.status == "success") {
			this.setState({
				email: "Got It!"
			});
		}
	}

	render() {
		return (
			<form class="form" onSubmit={this.onFormSubmit}>
				<input
					value={this.state.email}
					onChange={e => this.setState({ email: e.target.value })}
					type="email"
					class="form__field"
					placeholder="Your E-Mail Address"
				/>
				<button
					type="button"
					class="btn btn--primary btn--inside uppercase"
					onClick={this.onSubmit}>
					Send
				</button>
			</form>
		);
	}
}

const CustomForm = ({ status, message, onValidated }) => {
	let email;
	const submit = () =>
		email &&
		email.value.indexOf("@") > -1 &&
		onValidated({
			EMAIL: email.value
		});

	return (
		<div
			style={{
				background: "#efefef",
				borderRadius: 2,
				padding: 10,
				display: "inline-block"
			}}>
			{status === "success" && (
				<div
					style={{ color: "green" }}
					dangerouslySetInnerHTML={{ __html: message }}
				/>
			)}
			<input
				style={{ fontSize: "2em", padding: 5 }}
				ref={node => (email = node)}
				type="email"
				placeholder="Email"
			/>
			<br />
			<button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
				Submit
			</button>
		</div>
	);
};
