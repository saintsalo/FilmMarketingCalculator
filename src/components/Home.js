import React from 'react'

import Header from './common/Header'
import { Link } from 'react-router-dom'

const Description = () => (
	<span>Facebook Ad Calculator <br/>
	Plan your Facebook ad budget and calculate your projected outcomes for your indie film release with these eary-to-use tools.
	</span>
)

const Home = ( ) => (
	<div>
		<Header title="Smarthouse Creative Marketing Tools" description={<Description />}/>
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
					<p className="text-left description-paragraph">
						Develop a Facebook ad budget for the theatrical release of your indie film.
					</p>
					<Link to="/theatrical" className="btn btn-primary">Get Started</Link>

				</div>
				<div className="col-lg-6 home-page-col">
					<h2 className="icon-large">
						<Link to="/vod" className="faa-parent animated-hover">
							<i className="fa fa-television faa-pulse animated-hover" aria-hidden="true"></i>
							<span>Video on Demand</span>
						</Link>
					</h2>
					<hr/>
					<p className="text-left description-paragraph">
						Develop a Facebook ad for the VOD release of your indie film.
					</p>
					<Link to="/vod" className="btn btn-primary">Get Started</Link>
				</div>
			</div>
		</div>
	</div>

)

export default Home
