import React from "react";

import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
	return (
		<div>
			<SurveyList />
			<div className="fixed-action-btn">
				<a href="/surveys/new" className="btn-floating btn-large red">
					<i className="large material-icons">add</i>
				</a>
			</div>
		</div>
	);
};

export default Dashboard;
