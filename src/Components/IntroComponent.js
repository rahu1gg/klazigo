import React from "react";
import { Link } from "react-router-dom";

const Intro = (props) => {
	return (
		<>
			<Link to={`/${props.data.type.toLowerCase()}`}>
				<div className="intro">
					<div className="Intro__imgContainer">
						<img className="intro__img" src={props.data.image} alt="img" />
					</div>
					<h3 className="intro__title">{props.data.type}</h3>
					<p className="intro__info">{props.data.info}</p>
				</div>
			</Link>
		</>
	);
};

const orderedData = (data) => {
	return data.map((val) => {
		return <Intro key={val.type} data={val} />;
	});
};

const Introcomponent = ({ data }) => {
	return (
		<>
			<section className="section section--intro">
				{""}
				{orderedData(data)}
			</section>
		</>
	);
};

export default Introcomponent;
