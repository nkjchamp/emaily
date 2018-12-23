import React from "react";

export default () => {
	return (
		<div id="notes" className="section scrollspy">
			<h3>Project Notes</h3>
			<p>
				Notes taken while learning each part of the stack for this
				project and others throughout the process:
			</p>
			<ul className="browser-default left-align">
				<li>
					<a href="https://github.com/nkjchamp/streams/blob/master/React%20Notes.pdf">
						React Front-End Notes
					</a>
				</li>
				<li>
					<a href="https://github.com/nkjchamp/emaily/blob/master/Full%20Stack%20React%20Notes.pdf">
						React / Express / Mongo Full-Stack Notes
					</a>
				</li>
			</ul>
		</div>
	);
};
