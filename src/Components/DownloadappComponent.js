import React from "react";
import { Link } from "react-router-dom";
import applelogo from "../Images/applelogo.png";
import playstorelogo from "../Images/playstorelogo.png";
import portrait from "../Images/portrait.png";

const Downloadappcomponent = () => {
	return (
		<>
			<section className="download__container">
				<div className="download">
					<div className="download__imgContainer">
						<img src={portrait} alt="portait" className="download__img" />
					</div>
					<div className="download__card">
						<div className="download__conte">
							<h2 className="download__heading">Download the Klazigo app now</h2>
							<p className="download__info">
								Book appointments in the hospitals ,clinics ,doctors and order
								medicine which will be delivered to your doorstep within no time
							</p>
						</div>
						<div className="download__contact">
							<p className="download__para">Get the link to download app</p>
							<div className="download__inputContainer">
								<input
									placeholder="+91"
									type="number"
									name="number"
									id="number"
									className="download__number"
								/>
								<button className="download__sendSMS">Send SMS</button>
							</div>
							<div className="download__inputContainer">
								<Link className="download__link" to="/">
									<img
										className="download__imgLogo"
										src={playstorelogo}
										alt="googlePlayLogo"
									/>
									<p>Google Play</p>
								</Link>
								<Link className="download__link" to="/">
									<img
										className="download__imgLogo"
										src={applelogo}
										alt="appleLogo"
									/>
									<p>Apple Play</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Downloadappcomponent;
