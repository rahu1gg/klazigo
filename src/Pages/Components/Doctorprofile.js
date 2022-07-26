import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const btns = [
	{ id: 1, info: "Today" },
	{ id: 2, info: "Tommorow" },
	{
		id: 3,
		info: `${new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).getDate()} ${new Date(
			new Date().getTime() + 2 * 24 * 60 * 60 * 1000
		).toLocaleString("default", { month: "short" })}`,
	},
];

const Button = (props) => {
	return (
		<button className={props.classname} onClick={props.onclick}>
			{props.info}
		</button>
	);
};

const Doctorprofile = (props) => {
	const [btn, setAcitveBtn] = useState({
		activeObject: null,
	});

	const toggleActive = (id) => {
		setAcitveBtn({ ...btn, activeObject: id });
	};

	const changeClassName = (id) => {
		return btn.activeObject === id
			? "card__btn card__btn--active"
			: "card__btn card__btn--inactive";
	};

	const Btncomponent = btns.map((val) => (
		<Button
			key={val.id}
			classname={changeClassName(val.id)}
			info={val.info}
			onclick={() => toggleActive(val.id)}
		/>
	));
	const { pathname } = useLocation();

	return (
		<>
			<div className="card">
				<article className="card__sectionInfo">
					<div className="card__name">
						{props.name} ,
						<span className="card__qualification">{props.qualification}</span>
					</div>
					<p className="card__experience">
						{props.type}, {props.experience} years of experience <br />
						{props.hospitalName}
					</p>
					{!pathname.includes("slotconfirmation") && (
						<div className="card__btnContainer">{Btncomponent}</div>
					)}
				</article>
				<span className="card__lineDivider"></span>
				<div className="card__imgContainer">
					<img src={props.image} alt="doctorprofileimg" className="card__img" />
				</div>
			</div>
		</>
	);
};

export default Doctorprofile;
