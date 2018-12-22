import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";

import Payments from "./Payments";

class Header extends React.Component {
	componentDidMount() {
		M.Sidenav.init(this.sidenav);
	}

	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="2" style={{ margin: "0 10px" }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="3">
						<a href="/surveys">Dashboard</a>
					</li>,

					<li key="4">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	renderHomeButtonLink() {
		if (this.props.auth) {
			return "/";
		} else {
			return "/";
		}
	}

	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link
							to={this.renderHomeButtonLink()}
							className="brand-logo"
							style={{ margin: "0 10px" }}
						>
							Emaily
						</Link>
						<a
							href="#"
							data-target="mobile-demo"
							className="sidenav-trigger white-text"
						>
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
				<ul id="mobile-demo" className="sidenav show-on-med-and-down">
					{this.renderContent()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
