import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCalculations} from '../../actions/index';
import {bindActionCreators} from 'redux';
import {formatCurrency, formatPercentage, addComma} from '../../utils/helpers'
import {StickyContainer, Sticky} from 'react-sticky'

import Results from './Results'

class CalculatorVideo extends Component {
	constructor(props) {
		super(props)
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const {vod} = this.props.amounts;
		const target = event.target;
		const value = target.type === 'checkbox'
			? target.checked
			: target.value;
		const name = target.name;
		vod[name].value = value;
		this.props.updateCalculations(this.props.amounts)
	}

	render() {
		const {
			purchasePrice,
			rentalPrice,
			filmmakerCut,
			costPerClick,
			conversionRate,
			socialMediaBudget
		} = this.props.amounts.vod
		return (<StickyContainer>
			<div className="row">
				<div className="col-lg-4 col-md-5 col-sm-12">
					<Sticky distanceFromTop={10}>{
							({style}) => {
								return (<div className="result-sticky desktop" style={style}>
									<Results/>
								</div>)
							}
						}
					</Sticky>
					<div className="result-sticky phone">
						<Results/>
					</div>
				</div>

				<div className="col-lg-8 col-md-7 col-sm-12">
					<form>

						<div className="form-group row">
							<div className="col-sm-9">
								<label className="col-form-label">
									Purchase Price
								</label>
								<p className="lead lead-header">How much do you plan to charge for a download of your film?</p>
								<span className="slidercontainer">
									<input name="purchasePrice" type="range" min={purchasePrice.min} max={purchasePrice.max} value={purchasePrice.value} className="slider" id="myRange" onChange={this.handleInputChange} step={purchasePrice.step}/>
									<div className="float-left min">
										{purchasePrice.min}
									</div>
									<div className="float-right max">
										{addComma(purchasePrice.max)}
									</div>
								</span>
							</div>
							<div className="col-sm-3 text-right">
								<span className="display-number number">
									{formatCurrency(purchasePrice.value, true)}
								</span>
							</div>
						</div>

						<hr/>

						<div className="form-group row">
							<div className="col-sm-9">
								<label className="col-form-label">
									Rental Price
								</label>
								<p className="lead lead-header">How much do you plan to charge for a rental of your film?</p>
								<span className="slidercontainer">
									<input name="rentalPrice" type="range" min={rentalPrice.min} max={rentalPrice.max} value={rentalPrice.value} className="slider" id="myRange" onChange={this.handleInputChange} step={rentalPrice.step}/>
									<div className="float-left min">
										{formatCurrency(rentalPrice.min)}
									</div>
									<div className="float-right max">
										{formatCurrency(rentalPrice.max, false)}
									</div>
								</span>
							</div>
							<div className="col-sm-3 text-right">
								<span className="display-number price">
									{formatCurrency(rentalPrice.value)}
								</span>
							</div>
						</div>

						<hr/>

						<div className="form-group row">
							<div className="col-sm-9">
								<label className="col-form-label">
									Filmmaker Split
								</label>
								<p className="lead lead-header">What percentage of VOD revenue will be allocated to the filmmaker?</p>
								<span className="slidercontainer">
									<input name="filmmakerCut" type="range" min={filmmakerCut.min} max={filmmakerCut.max} value={filmmakerCut.value} className="slider" id="myRange" onChange={this.handleInputChange} step={filmmakerCut.step}/>
									<div className="float-left min">
										{formatPercentage(filmmakerCut.min)}
									</div>
									<div className="float-right max">
										{formatPercentage(filmmakerCut.max)}
									</div>
								</span>
							</div>
							<div className="col-sm-3 text-right">
								<span className="display-number percentage">
									{formatPercentage(filmmakerCut.value)}
								</span>
							</div>
						</div>

						<hr/>

						<div className="form-group row">
							<div className="col-sm-9">
								<label className="col-form-label">
									Social Network Ad Budget
								</label>
								<p className="lead lead-header">What is your budget for social network ads?</p>
								<span className="slidercontainer">
									<input name="socialMediaBudget" type="range" min={socialMediaBudget.min} max={socialMediaBudget.max} value={socialMediaBudget.value} className="slider" id="myRange" onChange={this.handleInputChange} step={socialMediaBudget.step}/>
									<div className="float-left min">
										{formatCurrency(socialMediaBudget.min, false)}
									</div>
									<div className="float-right max">
										{formatCurrency(socialMediaBudget.max, false)}
									</div>
								</span>
							</div>
							<div className="col-sm-3 text-right">
								<span className="display-number price">
									{formatCurrency(socialMediaBudget.value, false)}
								</span>
							</div>
						</div>

						<hr/>

						<div className="form-group row">
							<div className="col-sm-9">
								<label className="col-form-label">
									Projected Cost Per Click (CPC)
								</label>
								<p className="lead lead-header">How much are you willing to pay for a click?</p>
								<p className="info">For a high-performing campaign, CPC should be somewhere between $0.45/click and $0.99/click. If your CPC goes above $4, you should re-evaluate your ad creative and/or targeting.</p>
								<span className="slidercontainer">
									<input name="costPerClick" type="range" min={costPerClick.min} max={costPerClick.max} value={costPerClick.value} className="slider" id="myRange" onChange={this.handleInputChange} step={costPerClick.step}/>
									<div className="float-left min">
										{formatCurrency(costPerClick.min)}
									</div>
									<div className="float-right max">
										{formatCurrency(costPerClick.max, false)}
									</div>
								</span>
							</div>
							<div className="col-sm-3 text-right">
								<span className="display-number price">
									{formatCurrency(costPerClick.value)}<br/>
								</span>
							</div>
						</div>

						<hr/>

						<div className="form-group row">
							<div className="col-sm-9">
								<label className="col-form-label">
									Target Conversion Rate
								</label>
								<p className="lead lead-header">What percentage of clickthroughs will result in a purchase?</p>
								<p className="info">Conversion rates will vary based on your audience targeting ticket price and geographic limitations. In general, keep your estimate conservative (not to exceed 15%).</p>
								<span className="slidercontainer">
									<input name="conversionRate" type="range" min={conversionRate.min} max={conversionRate.max} value={conversionRate.value} className="slider" id="myRange" onChange={this.handleInputChange} step={conversionRate.step}/>
									<div className="float-left min">
										{formatPercentage(conversionRate.min)}
									</div>
									<div className="float-right max">
										{formatPercentage(conversionRate.max)}
									</div>
								</span>
							</div>
							<div className="col-sm-3 text-right">
								<span className="display-number number">
									{formatPercentage(conversionRate.value, true)}
								</span>
							</div>
						</div>

						<hr/>
					</form>
				</div>
			</div>
		</StickyContainer>)
	}
}

function mapStateToProps(state) {
	return {amounts: state.amounts};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateCalculations: updateCalculations
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorVideo)
