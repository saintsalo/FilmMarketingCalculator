
// Estimated Number of Clicks
export function calcEstimatedClicks(socialMediaBudget, costPerClick) {
	let x = socialMediaBudget / costPerClick;
	x = parseInt(x);
	return x;
}

// Calculate Tickets Sold
export function calcTicketsSold(estimatedClicks, conversionRate, ticketCount) {
	conversionRate = (conversionRate / 100);
	let x = (parseInt(estimatedClicks)*conversionRate);
	x = Math.floor(x);
	return x;
}

export function calcTicketsExcess(estimatedTicketsSold, ticketCount) {
	let x = estimatedTicketsSold - ticketCount;
	return x;
}

export function calcFilmmakerRevenue(estimatedTicketsSold, ticketCount, ticketPrice, filmmakerCut) {
	let tickets = (estimatedTicketsSold >= 0) ? ticketCount : estimatedTicketsSold;
	filmmakerCut = (parseInt(filmmakerCut) / 100);
	let x = ((parseInt(tickets) * parseInt(ticketPrice)) * filmmakerCut);
	return x;
}

// VOD

export function calcEstimatedVodSales(estimatedClicks, conversionRate, percent) {
	conversionRate = (conversionRate / 100);
	let x = (parseInt(estimatedClicks) * conversionRate) * percent;
	x = Math.floor(x);
	return x;
}

export function calcEstimatedFilmmakerVod(estimatedRentals, estimatedSales, rentalPrice, purchasePrice,
filmmakerCut) {
	filmmakerCut = (parseInt(filmmakerCut) / 100);
	let x = ((estimatedRentals * rentalPrice) + (estimatedSales * purchasePrice)) * filmmakerCut;
	return x;
}
