import React from "react";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow.js";
import axios from "axios";

function LoginPhoneCard(props) {
	const { value, handleChange, hashHandleChange } = props;

	const forward = (e) => {
		axios
			.post("/sendOTP", {
				phone: `+91${value.phone}`,
			})
			.then((res) => {
				console.log(res.data.otp);
				console.log(res);
				const hash = res.data.hash;
				hashHandleChange(hash);
			});

		e.preventDefault();
		props.nextStep();
	};

	return (
		<>
			<section className="loginCard__section">
				<SlideShow />
				<div className="loginCard__card">
					<h2 className="loginCard__title">Login</h2>
					<p className="loginCard__info">Get access to your account</p>
					<label htmlFor="phone" className="loginCard__label">
						Enter your mobile number or E-mail ID
					</label>
					<input
						type="tel"
						value={value.phone}
						onChange={handleChange(`phone`)}
						className="loginCard__input"
						id="phone"
						required
					/>
					<button className="loginCard__button" onClick={forward}>
						Continue
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

export default LoginPhoneCard;
