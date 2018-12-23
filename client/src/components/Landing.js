import React from "react";

const Landing = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Emaily!</h1>
			<h4>Getting Started</h4>
			<p>
				Once logged in, use the following steps to help you get started:
			</p>
			<ul>
				<li>
					Provide a fake (or real email) as long as it follows
					abc@xyz.com.
				</li>
				<li>
					Ignore the verification code process, and click "Fill in
					your card details manually".
				</li>
				<li>
					Use credit card number "4242 4242 4242 4242". * IMPORTANT:
					Must use this CC# *
				</li>
				<li>Add any future expiration date.</li>
				<li>Add any number for the CVC.</li>
			</ul>
			<p>
				Each Credit = One Survey to send. <br />
				Each Survey should have a single Yes/No feedback question as the
				"Body" of the email. <br />
				Go through the Survey Creation process, and provide valid emails
				in a comma separate list to test / see your emails. <br />
				Select Yes/No in the email(s) that you receive. <br />
				(NOTE: Hotmail and Yahoo's block emails from the site's server)
				<br />
				Check your dashboard for an updated list of your created Surveys
				and results.
				<br />
			</p>
		</div>
	);
};

export default Landing;
