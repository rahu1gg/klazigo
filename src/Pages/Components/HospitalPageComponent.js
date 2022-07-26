import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import TotalNoHospitals from "./HospitalCard.js";

const HospitalPageComponent = ({ data }) => {
	const url = useLocation();
	const navigate = useNavigate();
	const urlQueries = queryString.parse(url.search);

	const sortBtns = ["fee", "distance", "rating"];
	const [activeBtn, setActiveBtn] = useState({
		activeBtnId: sortBtns.indexOf(urlQueries.sortby),
		btns: sortBtns,
	});

	const findingActivebtn = (id) => {
		activeBtn.btns.forEach((val) => {
			if (activeBtn.btns[id] === val) {
				setActiveBtn((currState) => ({
					...currState,
					activeBtnId: id,
				}));
			}
		});
	};

	const activeClsName = (id) => {
		if (id === activeBtn.activeBtnId) {
			return `hospitalHog__buttons hospitalHog__buttons-active`;
		}
		return `hospitalHog__buttons`;
	};

	const sortby = sortBtns[activeBtn.activeBtnId];
	useEffect(() => {
		if (sortby) {
			navigate(`?sortby=${sortby}`);
		}
	}, [navigate, sortby]);

	data.sort((val1, val2) => {
		if (sortby === "rating") {
			return val1["stars"] - val2["stars"];
		}
		return val1[sortby] - val2[sortby];
	});

	return (
		<>
			<section className="hospitalHog__section">
				<div className="hospitalHog__heading">
					<h4>Near By Hospitals</h4>
					<div className="hospitalHog__sortBy">
						<p>Sort By:</p>
						<button className={activeClsName(0)} onClick={() => findingActivebtn(0)}>
							Fee
						</button>
						<button className={activeClsName(1)} onClick={() => findingActivebtn(1)}>
							Distance
						</button>
						<button className={activeClsName(2)} onClick={() => findingActivebtn(2)}>
							Rating
						</button>
					</div>
				</div>
				<div className="hospitalHog__totalHospitals">
					<TotalNoHospitals data={data} />
				</div>
			</section>
		</>
	);
};

export default HospitalPageComponent;
