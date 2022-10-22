(async () => {
	let coscoaleksbardzolubi = await (
		await fetch(`https://ifconfig.me/ip`)
	).text();

	console.log(`do not look here pls ` + coscoaleksbardzolubi);
})();
