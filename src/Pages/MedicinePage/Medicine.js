import React, { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import "./Medicine.css";
import Popular from "./Popular.js";
import Previoulsy from "./Previously.js";
import Concern from "./Concern.js";

import { axiosGet } from "../../Components/utils/axios.js";
import { reducer } from "../../Components/utils/reducer.js";

function App() {
	const { pathname } = useLocation();

	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		loading: true,
		data: [],
		error: "",
	});

	useEffect(() => {
		axiosGet(`${pathname}`, dispatch);
	}, [pathname]);

	console.log(data);

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error...</div>
			) : (
				<div className="App">
					<p className="title">Medicine and health Products</p>
					<Popular data={data.popularCategories} />
					<Previoulsy />
					<Concern data={data.concernBasedCategories} />
				</div>
			)}
		</>
	);
}

export default App;
