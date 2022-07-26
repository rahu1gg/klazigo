import React from "react";
import { Link } from "react-router-dom";
const REG = { UNDERSCORE: new RegExp(" ", "g") };

const Hospitalcategories = (props) => {
	return (
		<>
			<Link to={`/${props.info.replace(REG.UNDERSCORE, "_").toLowerCase()}`}>
				<div className="Hospital__card">
					<div className="Hospital__imgContainer">
						<img className="Hospital__img" src={props.image} alt="img_type" />
					</div>
					<p className="Hospital__type">{props.info}</p>
				</div>
			</Link>
		</>
	);
};

const hospitalContainer = (data) => {
	return data.map((val) => {
		return <Hospitalcategories key={val.info} info={val.info} image={val.image} />;
	});
};

const Hospitalcomponent = ({ data }) => {
	return (
		<>
			<section className="Hospital__categories">
				<div className="Hospital">
					<h2 className="Hospital__heading">Hospital categories</h2>
					<p className="Hospital__info">
						Book an appointment in the top hospitals near or your favourite.
					</p>
					<div className="Hospital__container">{hospitalContainer(data)}</div>
				</div>
			</section>
		</>
	);
};

export default Hospitalcomponent;
