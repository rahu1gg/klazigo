import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainComponent from "./Components/Main";
import Hospitals from "./Pages/HospitalPage/Hospital.js";
import ParticularHospital from "./Pages/ParticularHospital/ParticularHospital.js";
import ParticularHospitalDoctors from "./Pages/DoctorPage/ParticularHospitalDoctors.js";
import MedicineProductDetails from "./Pages/MedicineProduct/MedicineProductDetails";
import Medicine from "./Pages/MedicinePage/Medicine.js";
import MedicineCategory from "./Pages/MedicineCategoryPage/MedicineCategory.js";
import Plus from "./Pages/Plus.js";
import Offers from "./Pages/Offers.js";
import Slotbooking from "./Pages/Slotbooking";
import Slotconfirmation from "./Pages/Slotconfirmation";
import Pagenotfound from "./Pages/Pagenotfound.js";
import Cart from "./Pages/Cart";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<MainComponent />} />
					{[
						"/hospitals",
						"/multi-speciality",
						"/eye_hospitals_clinics",
						"/ears_nose_and_tongue",
						"/dental",
						"/test_center",
						"/checkup_@home",
					].map((val) => (
						<Route key={val} path={val} element={<Hospitals />} />
					))}
					<Route path="/hospitals/:id" element={<ParticularHospital />} />
					{[
						"/multi-speciality",
						"/eye_hospitals_clinics",
						"/ears_nose_and_tongue",
						"/dental",
						"/test_center",
						"/checkup_@home",
					].map((val) => (
						<Route key={val} path={`${val}/:id`} element={<ParticularHospital />} />
					))}

					<Route
						path="/hospitals/:id/:doctorType"
						element={<ParticularHospitalDoctors />}
					/>

					{[
						"/multi-speciality",
						"/eye_hospitals_clinics",
						"/ears_nose_and_tongue",
						"/dental",
						"/test_center",
						"/checkup_@home",
					].map((val) => (
						<Route
							key={val}
							path={`${val}/:id/:doctorType`}
							element={<ParticularHospitalDoctors />}
						/>
					))}

					<Route
						path="/hospitals/:id/:doctorType/:doctorName"
						element={<Slotbooking />}
					/>

					{[
						"/multi-speciality",
						"/eye_hospitals_clinics",
						"/ears_nose_and_tongue",
						"/dental",
						"/test_center",
						"/checkup_@home",
					].map((val) => (
						<Route
							path={`${val}/:id/:doctorType/:doctorName`}
							element={<Slotbooking />}
						/>
					))}

					<Route
						path="/hospitals/:id/:doctorType/:doctorName/slotconfirmation"
						element={<Slotconfirmation />}
					/>

					{[
						"/multi-speciality",
						"/eye_hospitals_clinics",
						"/ears_nose_and_tongue",
						"/dental",
						"/test_center",
						"/checkup_@home",
					].map((val) => (
						<Route
							path={`${val}/:id/:doctorType/:doctorName/slotconfirmation`}
							element={<Slotconfirmation />}
						/>
					))}

					<Route path="/medicine" element={<Medicine />} />
					<Route path="/medicine/:medType" element={<MedicineCategory />} />
					<Route
						path="/medicine/:medType/:medicineProduct"
						element={<MedicineProductDetails />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/Offers" element={<Offers />} />
					<Route path="/Plus" element={<Plus />} />
					<Route path="*" element={<Pagenotfound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
