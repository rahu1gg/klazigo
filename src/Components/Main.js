import React, { useEffect, useReducer } from "react";
import Introcomponent from "./IntroComponent.js";
import Adklazigocomponent from "./AdklazigoComponent.js";
import Hospitalcomponent from "./HospitalComponent.js";
import Doctorcomponent from "./DoctorComponent.js";
import Medicinecomponent from "./MedicineComponent.js";
import Healthcomponent from "./HealthArticle";
import Aboutuscomponent from "./AboutusComponent.js";
import Downloadappcomponent from "./DownloadappComponent.js";
import Footer from "./Footer";
import { axiosGet } from "./utils/axios";
import { reducer } from "./utils/reducer.js";

// 🍀🍀🍀The reducer function is in the 📂folder ./utils/reducer.js
function MainComponent() {
	const [{ loading, error, data }, dispatch] = useReducer(reducer, {
		data: [],
		loading: true,
		error: "",
	});

	useEffect(() => {
		// 🍀🍀🍀The axios.get method is in the 📂folder ./utils/axios.js
		axiosGet("/api", dispatch);
	}, []);

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error</div>
			) : (
				<main>
					<Adklazigocomponent />
					<Introcomponent data={data.IntroData} />
					<Hospitalcomponent data={data.HospitalCategoryData} />
					<Doctorcomponent data={data.DoctorCategoryData} />
					<Medicinecomponent data={data.MedAndHealthData} />
					<hr className="spliter" />
					<Healthcomponent data={data.HealthArticleData} />
					<hr className="spliter" />
					<Aboutuscomponent />
					<hr className="spliter spliter--lastLine" />
					<Downloadappcomponent />
					<Footer />
				</main>
			)}
		</>
	);
}

export default MainComponent;
