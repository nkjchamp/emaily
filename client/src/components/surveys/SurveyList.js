import React from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions/";

class SurveyList extends React.Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div className="card blue-grey darken-1" key={survey._id}>
					<div className="card-content white-text">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">
							Sent On:{" "}
							{new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<span
							className="white-text"
							style={{ margin: "0 10px" }}
						>
							Yes:{" "}
							<span className="green-text lighten-1">
								{survey.yes}
							</span>
						</span>
						<span
							className="white-text"
							style={{ margin: "0 10px" }}
						>
							No:{" "}
							<span className="red-text lighten-1">
								{survey.no}
							</span>
						</span>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(
	mapStateToProps,
	{ fetchSurveys }
)(SurveyList);
