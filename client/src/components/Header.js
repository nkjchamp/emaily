import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";

class Header extends React.Component {
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
					<li>
						<a href="/surveys">Dashboard</a>
					</li>,
					<li key="1">
						<Payments />
					</li>,
					<li key="2" style={{ margin: "0 10px" }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="3">
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
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.renderHomeButtonLink()}
						className="left brand-logo"
						style={{ margin: "0 10px" }}
					>
						Emaily
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
