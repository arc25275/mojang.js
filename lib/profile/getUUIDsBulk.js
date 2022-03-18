const fetch = require("node-fetch");
const { CORE_API } = require("../constants");

/**
 * Gets UUIDs of multiple usernames
 * @param {array} - Array of Minecraft usernames
 * */

module.exports = function getUUIDsBulk(usernames) {
	return fetch(`${CORE_API}/profiles/minecraft`, {
		method: "post",
		body: JSON.stringify(usernames),
		headers: { "Content-Type": "application/json" },
	})
		.then(res => {
			return res.json();
		})
		.catch(err => console.error(err));
};
