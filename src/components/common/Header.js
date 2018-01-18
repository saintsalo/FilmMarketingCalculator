import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props){
		super(props)
		console.log(this.props.children);
	}
	render( ) {
		return (
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
		);
	}
}
