import { actionTypes } from '../constants'

export const defaultCalculatorState = {
	ticketCount: 50,
	ticketPrice: 10,
	producerCut: 40,
	costPerClick: 55,
	conversionRate: 5,
	socialMediaBudget: 1000
}

export default (state = defaultCalculatorState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
