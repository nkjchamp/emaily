import React from "react";
import { connect } from "react-redux";

import { fetchSurveyThanks } from "../../actions";

class SurveyThanks extends React.Component {
	renderYesOrNo() {
		const { choice } = this.props.match.params;
		let YesOrNo = "I hope you vote come use our services again soon!";

		if (choice === "yes") {
			YesOrNo = "I hope you vote the same to hiring Neil :)";
		} else {
			YesOrNo = "I hope you vote the opposite to hiring Neil :)";
		}

		return (
			<div>
				<p>
					You voted:{" "}
					{choice.charAt(0).toUpperCase() + choice.slice(1)}
				</p>
				<p>{YesOrNo}</p>
			</div>
		);
	}

	render() {
		return (
			<div className="flow-text">
				<h3>Thanks for completing this survey!</h3>
				{this.renderYesOrNo()}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	// console.log(state);
	return {
		surveyId: ownProps.match.params.id
	};
}

export default connect(
	mapStateToProps,
	{ fetchSurveyThanks }
)(SurveyThanks);
