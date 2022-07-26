import React from "react";
import { Link } from "react-router-dom";

const Healtharticle = (props) => {
	return (
		<>
			<div className="Health__imgContainer">
				<img src={props.image} alt="img" className="Health__img" />
			</div>
			<p className="Health__type">{props.info}</p>
			<Link to="/" className="Health__btn">
				Read More
			</Link>
		</>
	);
};

const healthContainer = (data) => {
	return data.map((val) => {
		return <Healtharticle key={val.info} info={val.info} image={val.image} />;
	});
};

const Healthcomponent = ({ data }) => {
	return (
		<>
			<section className="Health__categories">
				<div className="Health">
					<div className="Health__container">
						<h2 className="Health__heading">Health Articles</h2>
						<p className="Health__info">
							Get upto date health related articles for free
						</p>
					</div>
					<div className="Health__container">{healthContainer(data)}</div>
					<div className="Health__container">{healthContainer(data)}</div>
				</div>
			</section>
		</>
	);
};

export default Healthcomponent;
