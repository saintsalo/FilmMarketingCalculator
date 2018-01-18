import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props){
		super(props)
	}
	render( ) {
		const { name, icon } = this.props;
		return (
			<div className="jumbotron jumbotron-fluid jumbotron-small">
 				{name} <i className={`fa ${icon} faa-pulse animated-hover`} aria-hidden="true"></i>
			</div>
		);
	}
}
