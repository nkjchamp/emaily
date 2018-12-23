// SurveyFormReview shows users their form inputs for review before submitting

import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter } from "react-router-dom";

import formFields from "./formFields";
import { submitSurvey } from "../../actions";

class SurveyFormReview extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props);
		// this.onCancel = onCancel;
		// this.credits = this.props.credits;
		// this.history = this.props.history;
	}

	renderReviewFields() {
		const reviewFields = _.map(formFields, ({ name, label }) => {
			return (
				<div key={name}>
					<label>{label}</label>
					<div>{this.props.formValues[name]}</div>
				</div>
			);
		});

		return reviewFields;
	}

	renderSendButton() {
		if (this.props.credits < 1) {
			return (
				<span>
					<button className="grey white-text btn-flat right">
						Send Survey
						<i className="material-icons right">email</i>
					</button>
					<h5 className="red-text">
						Not enough credits. Please Add Credits to Send Survey
					</h5>
				</span>
			);
		} else {
			return (
				<button
					className="green white-text btn-flat right"
					onClick={() =>
						this.props.submitSurvey(
							this.props.formValues,
							this.props.credits,
							this.props.history
						)
					} // action creator
				>
					Send Survey
					<i className="material-icons right">email</i>
				</button>
			);
		}
	}

	render() {
		return (
			<div>
				<h5>Please Confirm Your Survey</h5>
				{this.renderReviewFields()}
				<button
					className="yellow darken-3 white-text btn-flat"
					onClick={this.props.onCancel}
				>
					Back
				</button>
				{this.renderSendButton()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log(state);
	return {
		formValues: state.form.surveyForm.values,
		credits: state.auth.credits
	};
}

export default connect(
	mapStateToProps,
	{ submitSurvey }
)(withRouter(SurveyFormReview));
