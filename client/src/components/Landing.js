import React from "react";
import M from "materialize-css";
import Welcome from "./landingPage/Welcome";
import GettingStarted from "./landingPage/GettingStarted";
import Notes from "./landingPage/Notes";
import Projects from "./landingPage/Projects";

class Landing extends React.Component {
	componentDidMount() {
		M.ScrollSpy.init(this.scrollspy);
		M.Pushpin.init(this.pushpin);
	}

	getActiveElement(id) {
		return 'a[href="#' + id + '"]';
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 m9 l9 flow-text">
					<Welcome id="welcome" className="section scrollspy" />
					<GettingStarted
						id="gettingstarted"
						className="section scrollspy"
					/>
					<Notes id="notes" className="section scrollspy" />
					<Projects id="projects" className="section scrollspy" />
				</div>
				<div className="col hide-on-small-only m3 l3">
					<ul className="pinned section table-of-contents">
						<li>
							<a href="#welcome">Welcome</a>
						</li>
						<li>
							<a href="#gettingstarted">Getting Started</a>
						</li>
						<li>
							<a href="#notes">Project Notes</a>
						</li>
						<li>
							<a href="#projects">Other React Projects</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Landing;
