import axios from "axios";

const axiosGet = (url, dispatch) => {
	const fetchData = async () => {
		dispatch({ type: "FETCH_REQUEST" });
		try {
			const result = await axios.get(url);
			dispatch({ type: "FETCH_SUCCESS", payload: result.data });
		} catch (err) {
			dispatch({ type: "FETCH_REQUEST", payload: err.message });
		}
	};
	fetchData();
};

export { axiosGet };
