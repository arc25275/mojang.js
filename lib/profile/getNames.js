const fetch = require("node-fetch");
const { CORE_API } = require("../constants");

module.exports = function getNames(UUID) {
	return fetch(`${CORE_API}/user/profiles/${UUID}/names`)
		.then(res => {
			return res.json();
		})
		.catch(err => console.error(err));
};
