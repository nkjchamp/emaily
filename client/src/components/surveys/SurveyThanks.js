import React from "react";
import { connect } from "react-redux";

import { fetchSurvey } from "../../actions";

class SurveyThanks extends React.Component {
	componentDidMount() {
		const { surveyId } = this.props.match.params;
		this.props.fetchSurvey(surveyId);
		// console.log("cDM props: ", this.props);
	}

	renderYesOrNo() {
		let YesOrNo = "I hope you use our services again soon!";
		const { choice, surveyId } = this.props.match.params;
		// console.log("surveyId: ", surveyId);

		// console.log("choice: ", choice);
		if (choice === "yes") {
			YesOrNo = "I hope you vote the same to hiring Neil :)";
		} else {
			YesOrNo = "I hope you vote the opposite to hiring Neil :)";
		}

		if (surveyId) {
			// console.log(this.surveyId);
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

		return <div>Loading...</div>;
	}

	render() {
		return (
			<div className="flow-text">
				<h3>
					Thanks for completing the "{this.props.survey.title}"
					Survey!
				</h3>
				{this.renderYesOrNo()}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	// console.log("state: ", state);
	// console.log("ownprops: ", ownProps.match.params.surveyId);
	// console.log("state survey: ", state.surveys);
	// console.log("object values: ", Object.values(state.surveys));
	return {
		survey: state.surveys
	};
}

export default connect(
	mapStateToProps,
	{ fetchSurvey }
)(SurveyThanks);
