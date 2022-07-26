import React, { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { axiosGet } from "../../Components/utils/axios.js";
import { reducer } from "../../Components/utils/reducer.js";

const MedicineProductDetails = () => {
	const { pathname, search } = useLocation();

	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		data: [],
		loading: true,
		error: "",
	});

	useEffect(() => {
		axiosGet(`${pathname}${search}`, dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	console.log(data[0]);

	const postToBackend = (id) => {
		axios.post(`${pathname}${search}&medicineId=${id}`, {
			phone: localStorage.getItem("user"),
			medicineId: id,
		});
	};

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error...</div>
			) : (
				<>
					<div>
						<button onClick={() => postToBackend(data[0].id)}>Add to cart</button>
					</div>
				</>
			)}
		</>
	);
};

export default MedicineProductDetails;
