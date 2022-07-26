import React, { useState, useLayoutEffect, useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import Doctorprofile from "./Components/Doctorprofile";
import Footer from "../Components/Footer";
import Nmap from "./Components/Nmap.js";
import { axiosGet } from "../Components/utils/axios.js";
import { reducer } from "../Components/utils/reducer.js";
import morning from "../Images/morning img.png";
import backButton from "../Images/backbutton.png";

const [morningTimeSlot, afternoonTimeSlot] = [
	[
		{ id: 1, time: "10:00 AM" },
		{ id: 2, time: "10:15 AM" },
		{ id: 3, time: "10:30 AM" },
		{ id: 4, time: "10:45 AM" },
		{ id: 5, time: "11:00 AM" },
		{ id: 6, time: "11:15 AM" },
		{ id: 7, time: "11:30 AM" },
		{ id: 8, time: "11:45 AM" },
		{ id: 9, time: "12:00 AM" },
		{ id: 10, time: "12:15 AM" },
	],
	[
		{ id: 11, time: "2:00 AM" },
		{ id: 12, time: "2:15 AM" },
		{ id: 13, time: "2:30 AM" },
		{ id: 14, time: "2:45 AM" },
		{ id: 15, time: "3:00 AM" },
		{ id: 16, time: "3:15 AM" },
		{ id: 17, time: "3:30 AM" },
		{ id: 18, time: "3:45 AM" },
		{ id: 19, time: "4:00 AM" },
		{ id: 20, time: "4:15 AM" },
	],
];

const Slotboxex = (props) => {
	return (
		<div className={props.classname} onClick={props.onclick}>
			<p>{props.time}</p>
		</div>
	);
};

const Slotbooking = () => {
	const { pathname, search } = useLocation();

	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		loading: true,
		data: [],
		error: "",
	});

	useLayoutEffect(() => {
		axiosGet(`${pathname}${search}`, dispatch);
		console.log("data in useLayoutEffect" + data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	useEffect(() => {
		localStorage.setItem("doctorData", JSON.stringify(data));
	}, [data]);

	const [slot, setSlot] = useState({
		activeSlot: null,
	});

	const toggleSlot = (id) => {
		setSlot({ ...slot, activeSlot: id });
	};

	const changeClassName = (id) => {
		return slot.activeSlot === id
			? "slot__boxex slot__boxex--selected"
			: "slot__boxex slot__boxex--unselected";
	};

	const Morningslots = morningTimeSlot.map((val) => (
		<Slotboxex
			key={val.id}
			classname={changeClassName(val.id)}
			onclick={() => toggleSlot(val.id)}
			time={val.time}
		/>
	));

	const AfternoonSlots = afternoonTimeSlot.map((val) => (
		<Slotboxex
			key={val.id}
			classname={changeClassName(val.id)}
			onclick={() => toggleSlot(val.id)}
			time={val.time}
		/>
	));

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error...</div>
			) : (
				<>
					<Nmap />
					<section className="appointment__container">
						<div className="backLink">
							<Link to="/Hospitals">
								<img src={backButton} alt="backLogo" />
							</Link>
							<p>Select a time slot</p>
						</div>
						<Doctorprofile
							name={data[0].fullName}
							qualification={data[0].qualification}
							image={data[0].image}
							experience={data[0].experience}
							type={data[0].type}
							hospitalName={data[0].hospitalName}
						/>
						<div className="slot__container">
							<div className="slot__morningSlots">
								<div className="slot__heading">
									<img
										className="slot__morningImg"
										src={morning}
										alt="moriningImg"
									/>
									<p>Morning</p>
								</div>
								<div className="slot__availableTime">{Morningslots}</div>
							</div>
							<div className="slot__afternoonSlots">
								<div className="slot__heading">
									<img src={morning} alt="moriningImg" />
									<p>Afternoon</p>
								</div>
								<div className="slot__availableTime">{AfternoonSlots}</div>
							</div>
						</div>
						<Link to={`${pathname}/slotconfirmation${search}`} className="button">
							Book A Slot
						</Link>
					</section>
					<Footer />
				</>
			)}
		</>
	);
};

export default Slotbooking;
