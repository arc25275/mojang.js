const fetch = require("node-fetch");
const { CORE_API } = require("../constants");

module.exports = function getUUID(username) {
	/* const timestampReq = `?at=${timestamp}`; */
	/* Timestamps are currently broken */
	/* ${timestamp ? timestampReq : ""} */
	return fetch(`${CORE_API}/users/profiles/minecraft/${username}`)
		.then(res => {
			return res.json();
		})
		.catch(err => console.error(err));
};
