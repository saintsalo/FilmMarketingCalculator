import { actionTypes } from '../constants'

export const defaultCalculatorState = {
	theatrical: {
		ticketCount: {
			value: 50,
			min: 0,
			max: 2000,
			step: 1
		},
		ticketPrice: {
			value: 10,
			min: 0,
			max: 100,
			step: .50
		},
		filmmakerCut: {
			value: 15,
			min: 1,
			max: 100,
			step: 1
		},
		costPerClick: {
			value: 3.50,
			min: 0.1,
			max: 20,
			step: 0.1
		},
		conversionRate: {
			value: 2.6,
			min: 0.1,
			max: 50,
			step: 0.1
		},
		socialMediaBudget: {
			value: 1500,
			min: 100,
			max: 10000,
			step: 10
		}
	},
	vod: {
		purchasePrice: {
			value: 12.50,
			min: 0.25,
			max: 50,
			step: 0.25
		},
		rentalPrice: {
			value: 4.50,
			min: 0.25,
			max: 20,
			step: 0.25
		},
		filmmakerCut: {
			value: 15,
			min: 1,
			max: 100,
			step: 1
		},
		costPerClick: {
			value: 2,
			min: 0.1,
			max: 50,
			step: 0.1
		},
		conversionRate: {
			value: 5,
			min: 0.1,
			max: 50,
			step: 0.1
		},
		socialMediaBudget: {
			value: 1500,
			min: 100,
			max: 10000,
			step: 10
		},
	}
}

export default (state = defaultCalculatorState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_ENTERED_VALUES:
			return Object.assign({}, state, {
				amounts: action.payload
			})

		default:
			return state;
	}
}
