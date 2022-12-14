(async () => {
	let coscoaleksbardzolubi = await (
		await fetch(`https://ifconfig.me/ip`)
	).text();

	console.log(`do not look here pls ` + coscoaleksbardzolubi);

	const copyright_date = new Date().getFullYear();

	document.getElementById(
		"footer-copyright"
	).innerHTML = `© @adasiek187 ${copyright_date}`;
})();

// website coded by adasiek#9999 with 💞 and zero frontend skills
