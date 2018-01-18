import React, { Component } from 'react';
import logo from '../../images/smarthouse-logo.jpeg'
import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Theater from '../theatrical/Calculator'
import Vod from '../vod/CalculatorVideo'

const NavBar = ( ) => {
	return (
		<nav className="navbar navbar-toggleable-sm navbar-custom navbar-inverse">
			<a className="navbar-brand" href="#">
				<img src={logo} className="logo"/>
			</a>
			<span className="navbar-brand">
				<NavLink className="nav-link" to='/'>Filmmaker ROI Calculators</NavLink>
			</span>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink className="nav-link" activeClassName="active" to='/theatrical'>Theatrical Release</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" to='/vod'>Video on Demand</NavLink>
						</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;
