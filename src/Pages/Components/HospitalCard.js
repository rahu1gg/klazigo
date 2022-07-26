/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import LocationImg from "../Images/LocationImg.png";
import starIcon from "../Images/starIcon.png";
import rupeeImg from "../Images/rupeeImg.png";

const HospitalCard = (props) => {
	const { pathname } = useLocation();
	const NoOfStars = () =>
		useMemo(() => {
			const img = [];
			for (let i = 1; i <= props.stars; i++) {
				img.push(
					<img key={i} src={starIcon} alt="starIcon" className="hospitalHog__starIcon" />
				);
			}
			return img;
		}, [props.stars]);

	return (
		<>
			<div className="hospitalHog__card">
				<div className="hospitalHog__imgContainer">
					<img src={props.img} alt="hospitalImg" className="hospitalHog__img" />
				</div>
				<div className="hospitalHog__cardDetails">
					<div>
						<h3>{props.hospitalName}</h3>
						<div className="hospitalHog__starContainer">
							<NoOfStars />
						</div>
					</div>
					<div>
						<p className="hospitalHog__hospitalType">Multi-speciality</p>
						<div>
							<img src={LocationImg} alt="LocationIcon" />
							<p>{props.distance} Km</p>
						</div>
					</div>
					<div>
						<p>Consultation Fee of</p>
						<div>
							<img src={rupeeImg} alt="rupeeImg" />
							<p>
								<strong>{props.fee}</strong>
							</p>
						</div>
					</div>
					<div>
						<Link
							to={`${pathname}/${props.hospitalName
								.toLowerCase()
								.replace(" ", "_")}?hid=${props.id}`}
						>
							Book consultation
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

const TotalNoHospitals = ({ data }) => {
	return data.map((val) => {
		return (
			<HospitalCard
				key={val.id}
				id={val.id}
				hospitalName={val.hospitalName}
				fee={val.fee}
				distance={val.distance}
				stars={val.stars}
			/>
		);
	});
};

export default TotalNoHospitals;
