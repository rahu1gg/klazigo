import React, { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import Nmap from "../Components/Nmap.js";
import HospitalPageComponent from "../Components/HospitalPageComponent.js";
import { axiosGet } from "../../Components/utils/axios.js";
import { reducer } from "../../Components/utils/reducer.js";
import queryString from "query-string";

const Hospital = () => {
	const url = useLocation();
	const { pathname } = useLocation();

	// eslint-disable-next-line no-unused-vars
	const queryParams = queryString.parse(url.search);

	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		data: [],
		loading: true,
		error: "",
	});

	useEffect(() => {
		axiosGet(`${pathname}`, dispatch);
	}, [pathname]);

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error</div>
			) : (
				<>
					<Nmap />
					<HospitalPageComponent data={data} />
				</>
			)}
		</>
	);
};

export default Hospital;
