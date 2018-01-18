import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Footer from './common/Footer';
import Header from './common/Header'
import NavBar from './common/NavBar';

import '../styles/style.scss'

const Theme = ({ children }) => (
	<div>
		<NavBar/>
		<Header />
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					{children}
				</div>
			</div>
		</div>
		<Footer/>
	</div>
)

export default withRouter(Theme)
