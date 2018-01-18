import React, { Component } from 'react'

import Calculator from './Calculator'
import Header from '../common/Header';
import Title from '../common/Title'

class VodPage extends Component  {
	render(){
		return (
			<div>
				<Title name="Video on Demand" icon="fa-television" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Calculator />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VodPage
