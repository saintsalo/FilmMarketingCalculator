import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcEstimatedClicks, calcTicketsSold, calcFilmmakerRevenue } from '../../utils/calculations';
import { formatCurrency } from '../../utils/helpers';

class Results extends Component {
	componentDidMount(){

	}

	render(){
		const {
			ticketCount,
			ticketPrice,
			filmmakerCut,
			costPerClick,
			conversionRate,
			socialMediaBudget,
		} = this.props.amounts.theatrical
		const estimatedClicks = calcEstimatedClicks(costPerClick.value, ticketPrice.value);
		const estimatedTicketsSold = calcTicketsSold(ticketPrice.value)
		const estimatedFilmmakerRevenue = calcFilmmakerRevenue(ticketCount.value, ticketPrice.value, filmmakerCut.value)
		return (
			<div className="row results">
				<div className="col-lg-12 border-bottom text-center">
					<h3>Results</h3>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Number of Clicks
					</h6>
					<div className="result-number text-center">{estimatedClicks}</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Number of Tickets Sold
					</h6>
					<div className="result-number text-center">{estimatedTicketsSold}</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Filmmaker Revenue
					</h6>
					<div className="result-number text-center">{formatCurrency(estimatedFilmmakerRevenue, false)}</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps( state ) {
	return { amounts: state.amounts };
}

export default connect(mapStateToProps)(Results);
