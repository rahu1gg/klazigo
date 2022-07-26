import React from "react";
import Button from "./Button";

const Medicinecategories = (props) => {
	return (
		<>
			<div className="Medicine__card">
				<div className="Medicine__imgContainer">
					<img className="Medicine__img" src={props.image} alt="img" />
				</div>
				<p className="Medicine__type">{props.info}</p>
			</div>
		</>
	);
};

const medicineContainer = (data) => {
	return data.map((val) => {
		return <Medicinecategories key={val.info} image={val.image} info={val.info} />;
	});
};

const Medicinecomponent = ({ data }) => {
	return (
		<>
			<section className="Medicine__category">
				<div className="Medicine">
					<h2 className="Medicine__heading">Medicine and Health products</h2>
					<p className="Medicine__info">Buy Medicine and Health at best deals</p>
					<Button />
					<div className="Medicine__container">{medicineContainer(data)}</div>
				</div>
			</section>
		</>
	);
};

export default Medicinecomponent;
