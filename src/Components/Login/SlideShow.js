import React from "react";
import LoginImg from "../../Images/LoginImg.png";

function SlideShow() {
	return (
		<div className="slideShow__container">
			<div className="slideShow__card">
				<img className="adimage" src={LoginImg} alt={`img`} />
				<h3 className="title_ad">Book an appointment</h3>
				<p className="content1">
					Never waste your time againby waiting{`\n`} in your near by hospitals and
					clinics
				</p>
				{/* <p className="content2"> your near by hospitals and clinics</p> */}
			</div>
			{/* <div class="card_part card_part-two">
				<div className="slidecard">
					<img className="adimage" src={LoginImg} alt={`img`} />
					<p className="title_ad">Book an appointment</p>
					<p className="content1">Never waste your time againby waiting in</p>
					<p className="content2"> your near by hospitals and clinics</p>
				</div>
			</div> */}
			{/* <div class="card_part card_part-three">
				<div className="slidecard">
					<img className="adimage" src={LoginImg} alt={`img`} />
					<p className="title_ad">Book an appointment</p>
					<p className="content1">Never waste your time againby waiting in</p>
					<p className="content2"> your near by hospitals and clinics</p>
				</div>
			</div> */}

			{/* <div class="card_part card_part-four">
				<div className="slidecard">
					<img className="adimage" src={LoginImg} alt={`img`} />
					<p className="title_ad">Book an appointment</p>
					<p className="content1">Never waste your time againby waiting in</p>
					<p className="content2"> your near by hospitals and clinics</p>
				</div>
			</div> */}
		</div>
	);
}
export default SlideShow;
