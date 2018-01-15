
// Estimated Number of Clicks
export function calcEstimatedClicks(tickets, cost) {
	let x = tickets * cost / 4;
	x = parseInt(x);
	return x;
}

// Calculate Tickets Sold
export function calcTicketsSold(ticketCost) {
	let x = parseInt(ticketCost);
	return x;
}

export function calcFilmmakerRevenue(ticketCount, ticketPrice, filmmakerCut) {
	let x = (ticketCount * ticketPrice * filmmakerCut)
	x = parseInt(x);
	return x;
}
