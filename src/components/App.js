import React, { Component } from 'react'

import Calculator from './theatrical/Calculator'
import NavBar from './common/NavBar'

import '../styles/style.scss'

export default class App extends Component {
	render( ) {
		return (
			<div>
				<NavBar />
				<div className="jumbotron jumbotron-fluid jumbotron-custom">
					<div className="container">
						<div className="row">

							<div className="col-lg-12">
								<h1 className="display-4">
									Filmmaker ROI Calculator
								</h1>
								<p className="lead">A way to measure your Return on Investment when creating your new film!</p>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Calculator></Calculator>
						</div>
					</div>
				</div>
				<footer className="bg-black text-white">
					<span className="copyright large">
						&copy; 2018 Smarthouse Creative<br/>
						// Developed by Object Sonore
					</span>
				</footer>
			</div>
		);
	}
}
