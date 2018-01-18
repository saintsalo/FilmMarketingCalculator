import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props){
		super(props)
	}
	render( ) {
		const { title, description } = this.props;
		return (
			<div className="jumbotron jumbotron-fluid jumbotron-custom">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1 className="display-4">
								{title}
							</h1>
							<p className="lead">{description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
