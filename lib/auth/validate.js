const fetch = require("node-fetch");
const { AUTH_API } = require("../constants");

module.exports = function validate(accessToken) {
	payload = {
		accessToken: accessToken,
	};
	return fetch(`${AUTH_API}/validate`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: { "Content-Type": "application/json" },
	})
		.then(res => res.status)
		.then(status => {
			if (status == 204) {
				return true;
			} else {
				return false;
			}
		})
		.catch(err => console.error(err));
};
