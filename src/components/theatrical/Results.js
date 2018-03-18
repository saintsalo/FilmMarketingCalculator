import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcEstimatedClicks, calcTicketsSold, calcFilmmakerRevenue, calcTicketsExcess, calcTicketCount } from '../../utils/calculations';
import { formatCurrency } from '../../utils/helpers';

class Results extends Component {

	render(){
		const {
			ticketCount,
			ticketsAvailable,
			screenings,
			ticketPrice,
			filmmakerCut,
			costPerClick,
			conversionRate,
			socialMediaBudget,
		} = this.props.amounts.theatrical
		let ticketCountTotal = calcTicketCount(ticketsAvailable.value, screenings.value)
		let estimatedClicks = calcEstimatedClicks(socialMediaBudget.value, costPerClick.value);
		let estimatedTicketsSold = calcTicketsSold(estimatedClicks, conversionRate.value, ticketCountTotal)
		let estimateTicketsExcess = calcTicketsExcess(estimatedTicketsSold, ticketCountTotal);
		let estimatedFilmmakerRevenue = calcFilmmakerRevenue(estimatedTicketsSold, ticketCountTotal, ticketPrice.value, filmmakerCut.value);


		return (
			<div className="row results">
				<div className="col-lg-12 border-bottom text-center">
					<h3 className="light"><i className="fa fa-calculator" aria-hidden="true"></i> Results</h3>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Number of Clicks
					</h6>
					<div className="result-number text-center">{estimatedClicks}</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Total Tickets available
					</h6>
					<div className="result-number text-center">{ticketCountTotal}</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Number of Tickets Sold
					</h6>
					<div className="result-number text-center">
						<span className={(estimateTicketsExcess >= 0) ? "text-success" : ""}>
						{(estimateTicketsExcess >= 0) ? ticketCountTotal : estimatedTicketsSold}
						</span>
						<span className={(estimateTicketsExcess >= 0) ? "small sold-out text-muted" : "invisible hidden"}>
							&nbsp;+{estimateTicketsExcess} Oversold
						</span>
					</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Filmmaker Revenue
					</h6>
					<div className="result-number text-center">{formatCurrency(estimatedFilmmakerRevenue)}</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps( state ) {
	return {
		amounts: state.amounts
	 };
}

export default connect(mapStateToProps)(Results);
