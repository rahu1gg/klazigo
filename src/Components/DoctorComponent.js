import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const REG = { UNDERSCORE: new RegExp(" ", "g") };

const Doctorcategories = (props) => {
	return (
		<>
			<div className="Doctor__card">
				<div className="Doctor__imgContainer">
					<img className="Doctor__img" src={props.image} alt="img" />
				</div>

				<p className="Doctor__type">{props.info}</p>
				<Link
					className="Doctor__consult"
					to={`/${props.info.replace(REG.UNDERSCORE, "_")}`
						.replaceAll(" ", "")
						.toLowerCase()}
				>
					Consult Now
				</Link>
			</div>
		</>
	);
};

const DoctorContainer = (data) => {
	return data.map((val) => {
		return <Doctorcategories key={val.info} image={val.image} info={val.info} />;
	});
};

const Doctorcomponent = ({ data }) => {
	return (
		<>
			<section className="Doctor__categories">
				<div className="Doctor">
					<h2 className="Doctor__heading">Doctor Categories</h2>
					<p className="Doctor__info">
						Book an appointemnt in the top hospitals near by or your favourite.
					</p>
					<Button />
					<div className="Doctor__container">{DoctorContainer(data)}</div>
				</div>
			</section>
		</>
	);
};

export default Doctorcomponent;
