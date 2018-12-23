import React from "react";

export default () => {
	return (
		<div id="welcome" className="section scrollspy">
			<h1>Emaily</h1>
			<h3>Welcome</h3>
			<p>
				Welcome to Emaily! A simple React-Node-Mongo WebApp that allows
				users to create simple Yes/No feedback surveys to customers and
				track their responses. Below, you'll find a couple quick steps
				to <a href="#gettingstarted">Getting Started</a>,{" "}
				<a href="#notes">Project Notes</a> about the development
				process, and <a href="#project">Other React Projects</a> I used
				to learn about various React topics along the way. I hope you
				enjoy the app!
			</p>
			<p>
				If you have any questions, please feel free to{" "}
				<a href="mailto:neilkjagtiani@gmail.com">Contact Me</a> or
				reference the{" "}
				<a href="https://github.com/nkjchamp/emaily">Github Repo</a> for
				this project.
			</p>
		</div>
	);
};
