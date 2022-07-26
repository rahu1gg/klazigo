import React from "react";
import sidearrow from "../Images/image 6.png";

const Aboutuscomponent = () => {
	return (
		<>
			<section className="aboutus">
				<div className="aboutus__card">
					<h2 className="aboutus__heading">What our customers say about us</h2>
					<p className="aboutus__info">
						“Really loved their quick delivery and service,I used to waste a lot of time
						in search of medicines ,But Klazigo saved my time in getting the medicine
						delivered in just 15 mins”
					</p>
					<img className="aboutus__sideArrow" src={sidearrow} alt="arrow" />
					<div>
						<p className="aboutus__name">Rakesh Sharma</p>
						<p className="aboutus__location">Hyderbad</p>
						<ul className="aboutus__dotsContainer">
							<li className="aboutus__dots"></li>
							<li className="aboutus__dots aboutus__dots--active"></li>
							<li className="aboutus__dots"></li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Aboutuscomponent;
