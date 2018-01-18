import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcEstimatedClicks, calcEstimatedVodSales, calcEstimatedFilmmakerVod } from '../../utils/calculations';
import { formatCurrency } from '../../utils/helpers';

class ResultsVideo extends Component {
	render(){

		const vodRentalPercent = 45.56;
		const vodDownloadPercent = 54.46;

		const {
			purchasePrice,
			rentalPrice,
			filmmakerCut,
			costPerClick,
			conversionRate,
			socialMediaBudget,
		} = this.props.amounts.vod
		let estimatedClicks = calcEstimatedClicks(socialMediaBudget.value, costPerClick.value);
		let estimatedRentals = calcEstimatedVodSales(estimatedClicks, conversionRate.value, vodRentalPercent);
		let estimatedSales = calcEstimatedVodSales(estimatedClicks, conversionRate.value, vodDownloadPercent);
		let estimatedFilmmakerVod = calcEstimatedFilmmakerVod(
			estimatedRentals,
			estimatedSales,
			rentalPrice.value,
			purchasePrice.value,
			filmmakerCut.value
		);


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
						Expected Number of VoD Rentals
					</h6>
					<div className="result-number text-center">
						{estimatedRentals}
					</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Number of VoD Purchases
					</h6>
					<div className="result-number text-center">
						{estimatedSales}
					</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<h6 className="result-header">
						Expected Filmmaker Revenue
					</h6>
					<div className="result-number text-center">
						{formatCurrency(estimatedFilmmakerVod)}
					</div>
				</div>
				<div className="col-lg-12 border-bottom text-center">
					<div className="info-results text-left">
						Rental and Purchase %'s <a href="https://econsultancy.com/blog/67998-how-vod-is-becoming-the-video-consumption-method-of-choice-across-the-world" target="_blank">based on data:</a>
						<div className="row">
							<div className="col-lg-6">
								Total VOD Market
							</div>
							<div className="col-lg-6">
								4.04 (Billion)
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								VOD Rentals
							</div>
							<div className="col-lg-6">
								{vodRentalPercent}%
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								VOD Downloads
							</div>
							<div className="col-lg-6">
								{vodDownloadPercent}%
							</div>
						</div>
					</div>
				</div>
				<hr />
			</div>
		)
	}
}

function mapStateToProps( state ) {
	return {
		amounts: state.amounts
	 };
}

export default connect(mapStateToProps)(ResultsVideo);
