import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, FETCH_SURVEY_THANKS } from "./types.js";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post("/api/stripe", token);

	// console.log(res.data);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, credits, history) => async dispatch => {
	// make sure you check for the user having enough credits to send, else show a warning
	// console.log(credits);
	// try {
	const res = await axios.post("/api/surveys", values);
	history.push("/surveys");
	dispatch({ type: FETCH_USER, payload: res.data });
	// } catch (e) {
	// 	console.log(e.response);
	// }
};

export const fetchSurveys = () => async dispatch => {
	const res = await axios.get("/api/surveys");

	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchSurveyThanks = (surveyId, choice) => async dispatch => {
	const res = await axios.get(`/api/surveys/${surveyId}/${choice}`);

	console.log(res.data);
	dispatch({ type: FETCH_SURVEY_THANKS, payload: res.data });
};
