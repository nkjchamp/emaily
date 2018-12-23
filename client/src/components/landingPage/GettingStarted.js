import React from "react";

export default () => {
	return (
		<div id="gettingstarted" className="section scrollspy">
			<h3>Getting Started</h3>
			<h5>
				Once logged in, use the following steps to help you get started:
			</h5>
			<ul className="browser-default left-align">
				<li>
					Provide a fake (or real email) as long as it follows
					abc@xyz.com.
				</li>
				<li>
					Ignore the verification code process, and click "Fill in
					your card details manually".
				</li>
				<li>
					Use credit card number "4242 4242 4242 4242". <br />
					*IMPORTANT: Must use this Credit Card Number*
				</li>
				<li>Add any future expiration date.</li>
				<li>Add any number for the CVC.</li>
			</ul>
			<h5>Once credits have been added to your account:</h5>
			<ul className="browser-default left-align">
				<li>Each Credit = One Survey to send.</li>
				<li>
					Head on over to your dashboard to create your first survey
					(or view the ones you've already created).
				</li>
				<li>
					Click the "+" button in the bottom-right corner to create
					you survey.
				</li>
				<li>
					Ideally, your survey is a simple yes/no question for your
					user.
				</li>
				<li>
					Once created, sent, and users respond, the Yes/No response
					tally for your survey should update accordingly in your
					Dashboard.
				</li>
				<li>
					(NOTE: Hotmail and Yahoo block emails from the site's
					server).
				</li>
			</ul>
		</div>
	);
};
