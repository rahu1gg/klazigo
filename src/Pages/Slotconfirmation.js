import React, { useState } from "react";
import { Link } from "react-router-dom";
import Doctorprofile from "./Components/Doctorprofile";
import backButton from "../Images/backbutton.png";

function Slotconfirmation() {
	// eslint-disable-next-line no-unused-vars
	const [data, setCard] = useState(JSON.parse(localStorage.getItem("doctorData")));
	console.log(data);

	return (
		<>
			<section className="slotConfirmation__container">
				<div className="backLink">
					<Link to="/Hospitals">
						<img src={backButton} alt="backLogo" />
					</Link>
					<p>Confirm slot details</p>
				</div>
				<Doctorprofile
					name={data[0].name}
					qualification={data[0].qualification}
					image={data[0].image}
					experience={data[0].experience}
					type={data[0].type}
					hospitalName={data[0].hospitalName}
				/>
				<div className="slotConfirmation__appointmentTime">
					<span>Appointment on Today at 10:30 AM(10:15 -10:45)</span>

					<div className="patient__container">
						<div>
							<p className="patient__heading">Patient Details</p>
							<span className="patient__edit">EDIT</span>
						</div>
						<table className="patient__details">
							<tbody>
								<tr>
									<td>
										<p>Patient Name</p>
									</td>
									<td>
										<p>:</p>
									</td>
									<td>
										<p>Rahul Yadav</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>Age</p>
									</td>
									<td>
										<p>:</p>
									</td>
									<td>
										<p>24 yrs</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>Gender</p>
									</td>
									<td>
										<p>:</p>
									</td>
									<td>
										<p>Male</p>
									</td>
								</tr>
							</tbody>
						</table>
						<div>
							<p className="patient__heading">Charges:</p>
						</div>
						<table className="patient__charges">
							<tbody>
								<tr>
									<td>
										<p>Consultancy fee</p>
									</td>
									<td>
										<p className="patient__price">₹ 300</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>Booking fee</p>
									</td>
									<td>
										<p className="patient__price">₹ 15.45</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>Total</p>
									</td>
									<td>
										<p className="patient__price">₹ 315.45</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<Link className="patient__saveBtn" to="/">
					Save & Confirm
				</Link>
			</section>
		</>
	);
}

export default Slotconfirmation;
