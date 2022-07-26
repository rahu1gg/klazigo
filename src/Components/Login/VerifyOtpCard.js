import React, { useState } from "react";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow.js";
import axios from "axios";
import backPointer from "./Images/backPointer.png";

function VerifyOtpCard(props) {
	const [verification, setVerification] = useState(false);

	// eslint-disable-next-line no-unused-vars
	const { value, handleChange, hashHandleChange } = props;

	axios.defaults.withCredentials = true;
	const confirmOtp = (e) => {
		axios
			.post(`/verifyOTP`, {
				phone: `+91${value.phone}`,
				hash: `${value.hash}`,
				otp: `${value.otp}`,
			})
			.then((res) => {
				console.log(res);

				if (res.status === 200) {
					setVerification(true);
					return;
				}

				if (res.status === 202) {
					e.preventDefault();
					props.nextStep();
					setTimeout(props.closeModal, 1000);
					localStorage.setItem("user", res.data.phone);
					window.location.reload();
					return;
				}
			})
			.catch((err) => console.err(err.response.data));
	};

	const backward = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	return (
		<>
			<section className="loginCard__section">
				<button className="loginCard__backPointer" onClick={backward}>
					<img src={backPointer} alt="backPointerImg" />
				</button>
				<SlideShow />
				<div className="loginCard__card">
					<h2 className="loginCard__title">Verify</h2>
					<p className="loginCard__info">
						Please enter the OTP, Sent to your mobile number
					</p>
					<label htmlFor="phone" className="loginCard__label">
						One Time Password(OTP)
					</label>

					{verification && (
						<p style={{ color: "red", fontFamily: "Inter" }}>Incorrect OTP</p>
					)}

					<input
						type="number"
						value={value.otp}
						onChange={handleChange(`otp`)}
						className="loginCard__input"
						id="phone"
						required
					/>
					<button className="loginCard__button" onClick={confirmOtp}>
						Done
					</button>
					<p className="loginCard__newUser">
						New on Klazigo,
						<Link to="/" className="loginCard__signUpLink">
							Sign Up
						</Link>
					</p>
					<p className="loginCard__tnc">
						By Signing up,you agree to our <Link to="/"> Terms and Conditions</Link> and{" "}
						<Link to="/">Privacy Policy</Link>
					</p>
				</div>
			</section>
		</>
	);
}

export default VerifyOtpCard;
