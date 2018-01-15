export function formatCurrency( num, fixed = true ) {
	let n = Number(num)
	n = (fixed && n > 0) ? n.toFixed(2) : n;
	n = addComma(n);
	return `$${ n }`
}

export function addComma(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatPercentage( num, fixed = false ) {
	let n = Number(num)
	n = (fixed) ? n.toFixed(1) : n;
	return `${ n }%`
}
