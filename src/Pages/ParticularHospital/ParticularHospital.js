import React, { useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import Nmap from "../Components/Nmap.js";
import LocationImg from "../Images/LocationImg.png";
import rupeeImg from "../Images/rupeeImg.png";
import starIcon from "../Images/starIcon.png";
import hospitalImg from "../Images/hospitalImg.png";
import dCImg from "../Images/dCImg.png";
import { axiosGet } from "../../Components/utils/axios.js";
import { reducer } from "../../Components/utils/reducer.js";
const REG = { UNDERSCORE: new RegExp(" ", "g") };

const ParticularHospitalDoctorCategory = (props) => {
	const { pathname, search } = useLocation();

	return (
		<>
			<Link
				to={`${pathname}/${props.type
					.replace(REG.UNDERSCORE, "_")
					.toLowerCase()}${search}&dtype=${props.type
					.toLowerCase()
					.replace(REG.UNDERSCORE, "_")}`}
			>
				<div>
					<img
						src={
							// props.categoryImg ? props.categoryImg :
							dCImg
						}
						alt="dCImg"
					/>
					<h4>{props.type}</h4>
					<p>{props.categoryInfo}</p>
				</div>
			</Link>
		</>
	);
};

const ParticularHospitalInfo = ({ data }) => {
	return (
		<>
			<div className="particularHospitalPsn__card">
				<div className="particularHospitalPsn__details">
					<h2>{data.hospitalName}</h2>
					<p>{data.info}</p>
					<Link to={data.viewMap}>View Map</Link>
				</div>
				<div className="particularHospitalPsn__imgContainer">
					<img
						className="particularHospitalPsn__img"
						src={data.hospitalImg ? data.hospitalImg : hospitalImg}
						alt="hospitalImg"
					/>
				</div>
			</div>
			<div className="particularHospitalPsn__info">
				<p className="particularHospitalPsn__starContainer">
					{data.stars}.0 <img src={starIcon} alt="starIcon" />
				</p>
				<p className="particularHospitalPsn__feeContainer">
					Fee <img src={rupeeImg} alt="rupeeImg" />
					<span style={{ color: "#3473B9" }}>{data.fee}</span>
				</p>
				<p className="particularHospitalPsn__distanceContainer">
					<img src={LocationImg} alt="LocationIcon" />
					{data.distance} Km
				</p>
			</div>
			<hr className="particularHospitalPsn__horizontalLine" />
			<div>
				<p className="particularHospitalPsn__code">
					General Checkup 60% Off using code: {data.code.toUpperCase()}
				</p>
				{data.doctors ? (
					<h3>{data.doctors[0].type}</h3>
				) : (
					<h3>Doctor categories in {data.hospitalName}</h3>
				)}
			</div>
		</>
	);
};

const ParticularHospital = () => {
	const { pathname, search } = useLocation();
	console.log(search);

	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		data: [],
		loading: true,
		error: "",
	});

	useEffect(() => {
		axiosGet(`${pathname}${search}`, dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error</div>
			) : (
				<>
					<Nmap />
					<section className="particularHospitalPsn__section">
						<ParticularHospitalInfo data={data[0]} />
						{console.log(data[0])}
						<div className="particularHospitalPsn__doctorsCategory">
							{data[0].categories.map((val, index) => {
								return (
									<ParticularHospitalDoctorCategory
										key={index}
										categoryImg={val.categoryImg}
										type={val.type}
										categoryInfo={val.categoryInfo}
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

export { ParticularHospitalInfo };
export default ParticularHospital;
