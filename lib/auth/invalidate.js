const fetch = require("node-fetch");
const { AUTH_API } = require("../constants");

module.exports = function invalidate(accessToken, clientToken) {
	payload = {
		accessToken: accessToken,
		clientToken: clientToken,
	};
	return fetch(`${AUTH_API}/invalidate`, {
		method: "delete",
		body: JSON.stringify(payload),
		headers: { "Content-Type": "application/json" },
	})
		.then(res => res.json())
		.then(json => {
			if (json == null) {
				return accessToken;
			}
		})
		.catch(err => console.error(err));
};
