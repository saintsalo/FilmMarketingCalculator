import React from 'react'

import Header from './common/Header'
import { Link } from 'react-router-dom'

const Home = ( ) => (
	<div>
		<Header title="Smarthouse Creative Marketing Tools" description="We've put together some tools to help calculate your ROI for theatrical and vod releases."/>
		<div className="container">
			<div className="row">
				<div className="col-lg-6 home-page-col">
					<h2 className="icon-large">
						<Link to="/theatrical" className="faa-parent animated-hover">
							<i className="fa fa-video-camera faa-pulse animated-hover" aria-hidden="true"></i>
							<span>Theatrical Release</span>
						</Link>
					</h2>
					<hr/>
					<p className="text-left">
						Based on your social media budget and film we can help calculate the following for your next theatrical release:
					</p>
					<ul className="text-left">
						<li>Expected number of tickets sold</li>
						<li>Expected number of clicks</li>
						<li>Expected filmmaker revenue</li>
					</ul>

				</div>
				<div className="col-lg-6 home-page-col">
					<h2 className="icon-large">
						<Link to="/vod" className="faa-parent animated-hover">
							<i className="fa fa-television faa-pulse animated-hover" aria-hidden="true"></i>
							<span>Video on Demand</span>
						</Link>
					</h2>
					<hr/>
					<p className="text-left">
						Based on your social media budget and film we can help calculate the following for your Video on Demand release:
					</p>
					<ul className="text-left">
						<li>Expected number of tickets sold</li>
						<li>Expected number of VOD rentals</li>
						<li>Expected number of VOD sales</li>
						<li>Expected filmmaker revenue</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

)

export default Home
