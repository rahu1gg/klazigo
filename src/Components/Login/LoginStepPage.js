import React, { useState } from "react";
import LoginPhoneCard from "./LoginPhoneCard.js";
import VerifyOtpCard from "./VerifyOtpCard.js";
import LoginSuccessfulCard from "./LoginSuccessfulCard.js";

const LoginStepPage = ({ closeModal }) => {
	const [state, setState] = useState({
		phone: "",
		hash: "",
		otp: "",
	});

	// 🍀🍀 Start of the Step state and functions
	const [step, setStep] = useState(1);
	const nextStep = () => {
		setStep((currStep) => currStep + 1);
	};
	const prevStep = () => {
		setStep((currStep) => currStep - 1);
	};
	// 🍀🍀 End of the Step state and functions

	const handleChange = (input) => (e) => {
		setState({ ...state, [input]: e.target.value });
	};

	const hashHandleChange = (hash) => {
		setState({ ...state, hash: hash });
	};

	const { phone, hash, otp } = state;

	const value = { phone, hash, otp };

	switch (step) {
		case 1:
			return (
				<LoginPhoneCard
					nextStep={nextStep}
					hashHandleChange={hashHandleChange}
					handleChange={handleChange}
					value={value}
				/>
			);
		case 2:
			return (
				<VerifyOtpCard
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					value={value}
					closeModal={closeModal}
				/>
			);
		case 3:
			return <LoginSuccessfulCard />;
		default:
			return (
				<LoginPhoneCard
					nextStep={nextStep}
					hashHandleChange={hashHandleChange}
					handleChange={handleChange}
					value={value}
				/>
			);
	}
};

export default LoginStepPage;
