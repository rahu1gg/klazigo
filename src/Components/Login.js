import React, { useState } from "react";
import UserLogin from "./Login/UserLogin";
import VerifyOtp from "./Login/VerifyOtp";

const Login = () => {
	const [state, setState] = useState({
		phone: ``,
		hash: ``,
		otp: ``,
	});

	const [step, setStep] = useState(1);

	const handleChange = (input) => {
		return (e) => {
			setState({ ...state, [input]: e.target.value });
		};
	};

	const hashHandleChange = (hash) => {
		setState({ ...state, hash: hash });
	};

	const nextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};

	const prevStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const { phone, hash, otp } = state;

	const value = { phone, hash, otp };

	switch (step) {
		case 1:
			return (
				<UserLogin
					nextStep={nextStep}
					handleChange={handleChange}
					hashHandleChange={hashHandleChange}
				/>
			);
		case 2:
			return <VerifyOtp nextStep={nextStep} handleChange={handleChange} value={value} />;
		default:
			return (
				<UserLogin
					nextStep={nextStep}
					handleChange={handleChange}
					hashHandleChange={hashHandleChange}
				/>
			);
	}
};

export default Login;
