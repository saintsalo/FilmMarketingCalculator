import React, { Component } from 'react';
import logo from '../../images/smarthouse-logo.jpeg'

const NavBar = ( ) => {
	return (
		<nav className="navbar navbar-toggleable-sm navbar-custom navbar-inverse">
			<a className="navbar-brand" href="#">
				<img src={logo} className="logo"/>
			</a>
			<span className="navbar-brand">Filmmaker ROI Calculators</span>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Theatrical Release</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Video on Demand</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;
