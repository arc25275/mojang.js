const fetch = require("node-fetch");
const { AUTH_API } = require("../constants");

module.exports = function login(username, password) {
	const account = {};
	payload = {
		agent: {
			name: "Minecraft",
			version: 1,
		},
		username: username,
		password: password,
		requestUser: true,
	};
	return fetch(`${AUTH_API}/authenticate`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: { "Content-Type": "application/json" },
	})
		.then(res => res.json())
		.then(json => {
			account.accessToken = json.accessToken;
			account.clientToken = json.clientToken;
			account.UUID = json.selectedProfile.id;
			account.name = json.selectedProfile.name;
			return account;
		})
		.catch(err => console.error(err));
};
