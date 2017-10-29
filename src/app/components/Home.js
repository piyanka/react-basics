import React from "react";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<p>In a new Component!</p>
				{ 4 == 4 ? "yes": "no" }
			</div>
		);
	}
}