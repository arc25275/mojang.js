const fetch = require("node-fetch");
const { STATUS_API } = require("./constants");

module.exports = function status() {
	return fetch(`${STATUS_API}/check`)
		.then(res => {
			return res.json();
		})
		.catch(err => console.error(err));
};
