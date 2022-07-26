import React, { useState, useLayoutEffect, useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ParticularHospitalInfo } from "../ParticularHospital/ParticularHospital.js";
import Nmap from "../Components/Nmap.js";
import doctorImg from "./Images/doctorImg.png";
import starIcon from "../Images/starIcon.png";
import favoriteImg from "./Images/favorite.png";
import notFavoriteImg from "./Images/notFavorite.png";

import { axiosGet } from "../../Components/utils/axios.js";
import { reducer } from "../../Components/utils/reducer.js";

const regSpace = new RegExp(" ", "g");

const DoctorProfile = (props) => {
	const { pathname, search } = useLocation();

	return (
		<>
			<div className="doctorProfiledrag__card" style={{ position: "relative" }}>
				<img
					style={{ position: "absolute", top: "20px", right: "20px" }}
					src={props.isFavoriteImg}
					alt="favoriteImg"
					onClick={() => {
						props.setFavorite(props.id);
					}}
				/>
				<div className="doctorProfiledrag__imgContainer">
					<img src={doctorImg} alt="doctorImg" className="doctorProfiledrag__img" />
					<p className="doctorProfiledrag__starsContainer particularHospitalPsn__starContainer">
						{props.stars}.0 <img src={starIcon} alt="starIcon" />
					</p>
				</div>
				<div className="doctorProfiledrag__details">
					<h3>{props.name}</h3>
					<p>Experience: {props.experience} yrs</p>
					<p>Available {props.availability}</p>
					<Link
						to={`${pathname}/${props.name
							.toLowerCase()
							.replace(regSpace, "_")}${search}&did=${props.id}`}
					>
						Book a Slot
					</Link>
				</div>
			</div>
		</>
	);
};

const ParticularHospitalDoctors = () => {
	const { pathname, search } = useLocation();
	const [temporaryFavorite, setTemporaryFavorite] = useState([0]);

	const [{ loading, data, error }, dispatch] = useReducer(reducer, {
		data: [],
		loading: true,
		error: "",
	});

	useLayoutEffect(() => {
		const user = Number(localStorage.getItem("user").replace("+", ""));

		if (user) {
			console.log("before axios");
			axiosGet(`${pathname}${search}&user=${user}`, dispatch);
			console.log("after axios");
			console.log(data[1]);
			console.log(data);
		} else {
			axiosGet(`${pathname}${search}`, dispatch);
			console.log("after axios");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	useEffect(() => {
		if (data[1]) {
			console.log("inside useEffect", data[1]);
			const f = data[1];
			console.log(f);
			setTemporaryFavorite((currState) => [...currState, ...f]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	const setFavorite = (id) => {
		if (!temporaryFavorite.includes(id)) {
			setTemporaryFavorite((currState) => [...currState, id]);
			axios.post(
				`${pathname}`,
				{
					setFavorite: id,
					phone: localStorage.getItem("user"),
				},
				[temporaryFavorite]
			);
			return;
		}

		setTemporaryFavorite(temporaryFavorite.filter((val) => val !== id));
		axios.post(
			`${pathname}`,
			{
				removeFavorite: id,
				phone: localStorage.getItem("user"),
			},
			[temporaryFavorite]
		);
	};

	return (
		<>
			{loading ? (
				<div>Loading</div>
			) : error ? (
				<div>Error</div>
			) : (
				<>
					<Nmap />
					<section className="particularHospitalPsn__section">
						<ParticularHospitalInfo data={data[0]} />
						<div className="doctorProfiledrag__container">
							{data[0].doctors.map((val) => {
								return (
									<DoctorProfile
										key={val.id}
										id={val.id}
										name={val.name}
										stars={val.stars}
										experience={val.experience}
										availability={val.availability}
										setFavorite={setFavorite}
										isFavoriteImg={
											temporaryFavorite.includes(val.id)
												? favoriteImg
												: notFavoriteImg
										}
									/>
								);
							})}
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default ParticularHospitalDoctors;
