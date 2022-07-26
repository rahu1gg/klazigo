import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

axios.defaults.withCredentials = true;

class Auth {
	constructor() {
		this.authenticated = false;
	}

	isAuthenticated() {
		const accessToken = cookies.get("authSession");
		console.log(
			"🚀 ~ file: Auth.js ~ line 15 ~ Auth ~ isAuthenticated ~ accessToken",
			accessToken
		);
		const refreshToken = cookies.get(`refreshTokenId`);
		console.log(
			"🚀 ~ file: Auth.js ~ line 16 ~ Auth ~ isAuthenticated ~ refreshToken",
			refreshToken
		);

		if (!accessToken && !refreshToken) {
			return (this.authenticated = false);
		}
		if (accessToken && refreshToken) {
			return (this.authenticated = true);
		}
		if (!accessToken && refreshToken) {
			console.log("axios refresh should run");

			axios
				.post("/refresh", {
					withCredentials: true,
				})
				.then((res) => {
					console.log("🚀 ~ file: Auth.js ~ line 40 ~ Auth ~ .then ~ res", res);
				})
				.catch((err) => {
					console.log(err.response);
				});
		}
	}
}

export default new Auth();
