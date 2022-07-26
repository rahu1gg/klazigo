import React from "react";
import { Link } from "react-router-dom";
import klazigoLogo from "../Images/klazigoWhiteLogo.png";
import footerdata from "./Data/Footerdata";

const footerklazigodata = ["About Us", "Blog", "Careers", "Press", "FAQ", "Contact Us"];

const Footerklazigocategories = (props) => {
	return (
		<>
			<Link className="footer__klazigoLinks" to="/">
				{props.link}
			</Link>
		</>
	);
};

const Footerklazigocomponent = footerklazigodata.map((val) => (
	<Footerklazigocategories key={val} link={val} />
));

const Footercategories = (props) => {
	return (
		<>
			<div className="footer__type">
				<h3 className="footer__heading">{props.type}</h3>
				<Link to="/" className="footer__link">
					{props.link.hospitals}
				</Link>
				<Link to="/" className="footer__link">
					{props.link.clinics}
				</Link>
				<Link to="/" className="footer__link">
					{props.link.doctors}
				</Link>
				<Link to="/" className="footer__link">
					{props.link.articles}
				</Link>
				<Link to="/" className="footer__link">
					{props.link.app}
				</Link>
			</div>
		</>
	);
};

const footerContainer = footerdata.map((val) => (
	<Footercategories key={val.type} type={val.type} link={val.links} />
));

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__container">
					<div className="footer__type">
						<h2 className="footer__klazigoName">Klazigo</h2>
						{Footerklazigocomponent}
					</div>
					{footerContainer}
				</div>
				<div className="footer__imgContainer">
					<img className="footer__img" src={klazigoLogo} alt="klazigoLogo" />
					<p className="footer__copyright">All Rights Reserved</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
