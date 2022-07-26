import React from "react";
import Success from "./Images/Success.png";

const styles = {
	final: {
		width: "800px",
		textAlign: "center",
	},
	img: {
		width: "80%",
	},
	h2: {
		fontFamily: "Inter",
		margin: "10px 0 30px 0",
	},
};

function LoginSuccessfulCard() {
	return (
		<div style={styles.final} className="final">
			<img style={styles.img} className="fpic" src={Success} alt="successImg" />
			<h2 style={styles.h2} className="msg">
				{" "}
				Login Successfull{" "}
			</h2>
		</div>
	);
}
export default LoginSuccessfulCard;
