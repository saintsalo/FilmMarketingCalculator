import React, { Component } from 'react'
import { withRouter, } from 'react-router-dom'

import Footer from './common/Footer';
import Header from './common/Header'
import NavBar from './common/NavBar';

import '../styles/style.scss'
import '../styles/font-awesome-animation.css'

class Theme extends React.Component {
	constructor(props ) {
		super(props );
	}

	render( ) {
		// console.log(this.props.children);
		const {children} = this.props
		return (
			<div className="theme">
				<div className="content">
					<NavBar/>
					{children}
				</div>
				<div className="row information">
					<div className="col-lg-12 text-center">
						Want help with your theatrical or on-demand release? <br/>Contact us at <a href="mailto:heyyouguys@smarthousecreative.com" target="_top">heyyouguys@smarthousecreative.com</a> for a free quote!
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

// const Theme = ({ children }) => {
// 	return (
// 		<div>
// 			<NavBar/>
// 			<Header />
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-lg-12">
// 						{children}
// 					</div>
// 				</div>
// 			</div>
// 			<Footer/>
// 		</div>
// 	)
// }

export default withRouter( Theme )
